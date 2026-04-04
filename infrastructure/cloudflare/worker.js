/**
 * Sturrocks HVAC Cloudflare Worker
 * Handles web form submissions.
 * Requires RESEND_API_KEY environment variable.
 * See /infrastructure/cloudflare/README.md
 */

const RATE_LIMIT = 5;                 // max submissions
const WINDOW_MS = 10 * 60 * 1000;     // 10 minutes

const ipStore = new Map();

const workerHandler = {
  async fetch(request, env) {
    console.log("[Worker] Received request", { method: request.method, url: request.url });
    const origin = request.headers.get("origin");

    const allowedOrigins = [
      "https://sturrockshvac.com",
      "http://localhost:3000", // keep for development
    ];

    const corsHeaders = {
      "Access-Control-Allow-Origin": allowedOrigins.includes(origin)
        ? origin
        : "null",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    try {
      console.log("[Worker] Headers", Object.fromEntries(request.headers.entries()));
      // -------------------------
      // RATE LIMITING
      // -------------------------
      const ip =
        request.headers.get("cf-connecting-ip") ||
        request.headers.get("x-forwarded-for") ||
        "unknown";

      const now = Date.now();
      const record = ipStore.get(ip);

      if (record) {
        if (now - record.start < WINDOW_MS) {
          if (record.count >= RATE_LIMIT) {
            return new Response(
              JSON.stringify({
                error: "Too many submissions. Please try again later.",
              }),
              {
                status: 429,
                headers: { ...corsHeaders, "Content-Type": "application/json" },
              }
            );
          }
          record.count += 1;
        } else {
          ipStore.set(ip, { count: 1, start: now });
        }
      } else {
        ipStore.set(ip, { count: 1, start: now });
      }

      // -------------------------
      // PARSE BODY
      // -------------------------
      let data;
      try {
        data = await request.json();
        console.log("[Worker] Parsed body", data);
      } catch (err) {
        console.error("[Worker] Failed to parse JSON body", err);
        return new Response(JSON.stringify({ error: "Invalid JSON body." }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      if (data.honeypot) {
        return new Response(JSON.stringify({ ok: true }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      const name = (data.name || "").trim();
      const phone = (data.phone || "").trim();
      const email = (data.email || "").trim();
      const service = (data.service || "").trim();
      const serviceType = (data.serviceType || "").trim();
      const details = (data.details || "").trim();

      // -------------------------
      // VALIDATION
      // -------------------------
      if (!name || name.length < 2 || name.length > 100)
        return badRequest("Invalid name.");

      if (!phone || !/^\+?[0-9\s\-().]{10,}$/.test(phone))
        return badRequest("Invalid phone number.");

      if (email && !/^\S+@\S+\.\S+$/.test(email))
        return badRequest("Invalid email address.");

      if (!service)
        return badRequest("Service required.");

      if (!details || details.length < 10 || details.length > 1000)
        return badRequest("Invalid details.");

      // -------------------------
      // SEND EMAIL
      // -------------------------
      let resendResponse;
      try {
        resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Sturrocks HVAC <no-reply@sturrockshvac.com>",
          to: "email@destination.com",
          subject: "Webform: New Service Request",
          text: `
Name: ${name}
Phone: ${phone}
Email: ${email}
Service: ${service}
Service Type: ${serviceType}

Details:
${details}
          `,
        }),
        });
      } catch (err) {
        console.error("[Worker] Failed to call Resend API", err);
        return new Response(JSON.stringify({ error: "Failed to call Resend API." }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      console.log("[Worker] Resend API response status", resendResponse.status);

      if (!resendResponse.ok) {
        const errorText = await resendResponse.text();
        console.error("[Worker] Resend API error response", errorText);
        return new Response(
          JSON.stringify({ error: "Email delivery failed.", details: errorText }),
          {
            status: 500,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }

      return new Response(JSON.stringify({ ok: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });

      function badRequest(message) {
        return new Response(JSON.stringify({ error: message }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

    } catch (err) {
      console.error("[Worker] Uncaught error", err);
      return new Response(
        JSON.stringify({ error: "Server error.", details: String(err) }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }
  },
};

export default workerHandler;
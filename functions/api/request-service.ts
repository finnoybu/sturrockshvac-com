// Cloudflare Pages Function — handles POST /api/request-service.
//
// Direct port of the previous Next.js API route handler. Pages Functions
// receive a context object instead of a Request directly; bindings live
// on `context.env` rather than via getCloudflareContext().

interface Env {
  RESEND_API_KEY?: string;
  FORM_DESTINATION_EMAIL?: string;
  FORM_FROM_ADDRESS?: string;
}

interface RequestPayload {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  serviceType?: string;
  details?: string;
  honeypot?: string;
}

const ALLOWED_ORIGINS = new Set<string>([
  "https://sturrockshvac.com",
  "https://www.sturrockshvac.com",
  // Allow Cloudflare Pages preview deployments (subdomain.pages.dev).
  // Wildcards aren't supported by `Set.has`, so preview-origin matching
  // happens in isAllowedOrigin() below.
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:8788", // wrangler pages dev default port
]);

function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return true; // same-origin
  if (ALLOWED_ORIGINS.has(origin)) return true;
  // Pages preview URLs: <hash>.<project>.pages.dev
  // e.g. c8e03a38.sturrockshvac-com.pages.dev
  if (/^https:\/\/[a-z0-9.-]+\.pages\.dev$/.test(origin)) return true;
  return false;
}

function corsHeadersFor(origin: string | null): Record<string, string> {
  if (origin && isAllowedOrigin(origin)) {
    return {
      "Access-Control-Allow-Origin": origin,
      Vary: "Origin",
    };
  }
  return {};
}

function jsonResponse(
  body: unknown,
  status: number,
  origin: string | null,
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeadersFor(origin),
    },
  });
}

function badRequest(message: string, origin: string | null): Response {
  return jsonResponse({ error: message }, 400, origin);
}

function serverError(message: string, origin: string | null): Response {
  return jsonResponse({ error: message }, 500, origin);
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const origin = request.headers.get("origin");

  if (!isAllowedOrigin(origin)) {
    return new Response(null, { status: 403 });
  }

  const RESEND_API_KEY = env.RESEND_API_KEY;
  const FORM_DESTINATION_EMAIL = env.FORM_DESTINATION_EMAIL;
  const FORM_FROM_ADDRESS =
    env.FORM_FROM_ADDRESS ||
    "Sturrock's HVAC <no-reply@sturrockshvac.com>";

  if (!RESEND_API_KEY) {
    console.error("[request-service] RESEND_API_KEY is not configured");
    return serverError("Email service not configured.", origin);
  }
  if (!FORM_DESTINATION_EMAIL) {
    console.error("[request-service] FORM_DESTINATION_EMAIL is not configured");
    return serverError("Email destination not configured.", origin);
  }

  let data: RequestPayload;
  try {
    data = (await request.json()) as RequestPayload;
  } catch {
    return badRequest("Invalid JSON body.", origin);
  }

  if (data.honeypot) {
    return jsonResponse({ ok: true }, 200, origin);
  }

  const name = (data.name || "").trim();
  const phone = (data.phone || "").trim();
  const email = (data.email || "").trim();
  const service = (data.service || "").trim();
  const serviceType = (data.serviceType || "").trim();
  const details = (data.details || "").trim();

  if (!name || name.length < 2 || name.length > 100)
    return badRequest("Invalid name.", origin);
  if (!phone || !/^\+?[0-9\s\-().]{10,}$/.test(phone))
    return badRequest("Invalid phone number.", origin);
  if (email && !/^\S+@\S+\.\S+$/.test(email))
    return badRequest("Invalid email address.", origin);
  if (!service) return badRequest("Service required.", origin);
  if (!details || details.length < 10 || details.length > 1000)
    return badRequest("Invalid details.", origin);

  const subjectLabel = serviceType ? `${service} / ${serviceType}` : service;
  const textBody = [
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email || "(not provided)"}`,
    `Service: ${service}`,
    `Service Type: ${serviceType || "(none)"}`,
    "",
    "Details:",
    details,
  ].join("\n");

  let resendResponse: Response;
  try {
    resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FORM_FROM_ADDRESS,
        to: FORM_DESTINATION_EMAIL,
        reply_to: email || undefined,
        subject: `Webform: New Service Request — ${subjectLabel}`,
        text: textBody,
      }),
    });
  } catch (err) {
    console.error("[request-service] Resend fetch threw", err);
    return serverError("Failed to call email service.", origin);
  }

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text().catch(() => "(no body)");
    console.error("[request-service] Resend error", {
      status: resendResponse.status,
      body: errorText,
    });
    return serverError("Email delivery failed.", origin);
  }

  const result = (await resendResponse.json().catch(() => ({}))) as {
    id?: string;
  };
  console.log("[request-service] Sent", { messageId: result.id });

  return jsonResponse({ ok: true }, 200, origin);
};

export const onRequestOptions: PagesFunction<Env> = async (context) => {
  const origin = context.request.headers.get("origin");
  if (!isAllowedOrigin(origin)) {
    return new Response(null, { status: 403 });
  }

  return new Response(null, {
    status: 204,
    headers: {
      Allow: "POST, OPTIONS",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
      ...corsHeadersFor(origin),
    },
  });
};

import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";

interface RequestPayload {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  serviceType?: string;
  details?: string;
  honeypot?: string;
}

// Allowed origins for cross-origin requests to this endpoint.
// Same-origin requests typically have no Origin header and pass without
// a check. Cross-origin requests must come from one of these.
const ALLOWED_ORIGINS = new Set<string>([
  "https://sturrockshvac.com",
  "https://www.sturrockshvac.com",
  // Local dev — keep until/unless the deploy story changes.
  "http://localhost:3000",
  "http://localhost:3001",
]);

function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return true; // same-origin
  return ALLOWED_ORIGINS.has(origin);
}

function corsHeadersFor(origin: string | null): Record<string, string> {
  // Echo back the requesting origin only when it's on our allow-list.
  // Never reflect an arbitrary Origin (would defeat the purpose).
  if (origin && ALLOWED_ORIGINS.has(origin)) {
    return {
      "Access-Control-Allow-Origin": origin,
      Vary: "Origin",
    };
  }
  return {};
}

function badRequest(message: string, origin: string | null = null) {
  return NextResponse.json(
    { error: message },
    { status: 400, headers: corsHeadersFor(origin) },
  );
}

function serverError(
  message: string,
  details?: unknown,
  origin: string | null = null,
) {
  return NextResponse.json(
    { error: message, ...(details !== undefined ? { details } : {}) },
    { status: 500, headers: corsHeadersFor(origin) },
  );
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (!isAllowedOrigin(origin)) {
    return new NextResponse(null, { status: 403 });
  }

  const { env } = getCloudflareContext();

  const RESEND_API_KEY = (env as Record<string, string | undefined>).RESEND_API_KEY;
  const FORM_DESTINATION_EMAIL = (env as Record<string, string | undefined>).FORM_DESTINATION_EMAIL;
  const FORM_FROM_ADDRESS =
    (env as Record<string, string | undefined>).FORM_FROM_ADDRESS ||
    "Sturrock's HVAC <no-reply@sturrockshvac.com>";

  if (!RESEND_API_KEY) {
    console.error("[request-service] RESEND_API_KEY is not configured");
    return serverError("Email service not configured.");
  }
  if (!FORM_DESTINATION_EMAIL) {
    console.error("[request-service] FORM_DESTINATION_EMAIL is not configured");
    return serverError("Email destination not configured.");
  }

  let data: RequestPayload;
  try {
    data = (await request.json()) as RequestPayload;
  } catch {
    return badRequest("Invalid JSON body.");
  }

  if (data.honeypot) {
    return NextResponse.json({ ok: true });
  }

  const name = (data.name || "").trim();
  const phone = (data.phone || "").trim();
  const email = (data.email || "").trim();
  const service = (data.service || "").trim();
  const serviceType = (data.serviceType || "").trim();
  const details = (data.details || "").trim();

  if (!name || name.length < 2 || name.length > 100) return badRequest("Invalid name.");
  if (!phone || !/^\+?[0-9\s\-().]{10,}$/.test(phone)) return badRequest("Invalid phone number.");
  if (email && !/^\S+@\S+\.\S+$/.test(email)) return badRequest("Invalid email address.");
  if (!service) return badRequest("Service required.");
  if (!details || details.length < 10 || details.length > 1000) return badRequest("Invalid details.");

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
    return serverError("Failed to call email service.");
  }

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text().catch(() => "(no body)");
    console.error("[request-service] Resend error", {
      status: resendResponse.status,
      body: errorText,
    });
    return serverError("Email delivery failed.");
  }

  const result = (await resendResponse.json().catch(() => ({}))) as { id?: string };
  console.log("[request-service] Sent", { messageId: result.id });

  return NextResponse.json({ ok: true });
}

export async function OPTIONS(request: Request) {
  const origin = request.headers.get("origin");
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
}

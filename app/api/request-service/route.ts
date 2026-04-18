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

function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}

function serverError(message: string, details?: unknown) {
  return NextResponse.json(
    { error: message, ...(details !== undefined ? { details } : {}) },
    { status: 500 },
  );
}

export async function POST(request: Request) {
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

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: { Allow: "POST, OPTIONS" },
  });
}

import { NextResponse } from "next/server";

const CONTACT_TO_EMAIL = "corporationk28@gmail.com";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  interest?: string;
  message?: string;
};

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL ?? "KV DEV <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 503 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = clean(payload.name);
  const phone = clean(payload.phone);
  const email = clean(payload.email);
  const interest = clean(payload.interest);
  const message = clean(payload.message);

  if (!name || !phone) {
    return NextResponse.json(
      { error: "Name and phone are required." },
      { status: 400 },
    );
  }

  const text = [
    "Нова заявка з сайту KV DEV",
    "",
    `Ім'я: ${name}`,
    `Телефон: ${phone}`,
    email ? `Email: ${email}` : "Email: —",
    interest ? `Мета звернення: ${interest}` : "Мета звернення: —",
    message ? `Повідомлення: ${message}` : "Повідомлення: —",
  ].join("\n");

  const html = `
    <h2>Нова заявка з сайту KV DEV</h2>
    <p><strong>Ім'я:</strong> ${escapeHtml(name)}</p>
    <p><strong>Телефон:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Email:</strong> ${email ? escapeHtml(email) : "—"}</p>
    <p><strong>Мета звернення:</strong> ${interest ? escapeHtml(interest) : "—"}</p>
    <p><strong>Повідомлення:</strong><br />${message ? escapeHtml(message).replace(/\n/g, "<br />") : "—"}</p>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: CONTACT_TO_EMAIL,
      reply_to: email || undefined,
      subject: `Нова заявка KV DEV — ${name}`,
      text,
      html,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Email delivery failed." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

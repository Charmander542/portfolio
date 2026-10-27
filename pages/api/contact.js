const SERVICE_ID = process.env.EMAILJS_SERVICE_ID || "service_62rt0cn";
const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID || "template_8tk215o";
const PUBLIC_KEY =
  process.env.EMAILJS_PUBLIC_KEY || "dDJ3Cldk8CqHGyqyk";
const PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY || "";

const HONEYPOT_FIELDS = ["company", "website", "url"];

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || "").trim());
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const message = String(body.message || "").trim();

  // Reject honeypot fills
  for (const field of HONEYPOT_FIELDS) {
    if (String(body[field] || "").trim()) {
      return res.status(200).json({ ok: true, provider: "honeypot" });
    }
  }

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "Missing required fields" });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ ok: false, error: "Invalid email address" });
  }
  if (message.length > 5000) {
    return res.status(400).json({ ok: false, error: "Message too long" });
  }

  if (!TEMPLATE_ID) {
    return res.status(500).json({
      ok: false,
      error:
        "Email template is not configured. Add EMAILJS_TEMPLATE_ID (e.g. template_xxxxxxx).",
    });
  }
  if (!PRIVATE_KEY) {
    return res.status(500).json({
      ok: false,
      error: "Email private key is not configured on the server.",
    });
  }

  const templateParams = {
    name,
    email,
    message,
    from_name: name,
    from_email: email,
    reply_to: email,
    to_name: "Charles Van Hook",
    subject: `Portfolio contact from ${name}`,
  };

  try {
    const ejRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id: PUBLIC_KEY,
        accessToken: PRIVATE_KEY,
        template_params: templateParams,
      }),
    });

    const text = await ejRes.text();
    if (!ejRes.ok) {
      console.error("EmailJS error:", ejRes.status, text);
      return res.status(502).json({
        ok: false,
        error: text || `EmailJS failed (${ejRes.status})`,
      });
    }

    return res.status(200).json({ ok: true, provider: "emailjs" });
  } catch (err) {
    console.error("Contact API exception:", err);
    return res.status(500).json({
      ok: false,
      error: err?.message || "Failed to send message",
    });
  }
}

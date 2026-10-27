import emailjs from "@emailjs/browser";

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "vanhookch@gmail.com";

const SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_62rt0cn";
const TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_8tk215o";
const PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "dDJ3Cldk8CqHGyqyk";

const templateParams = ({ name, email, message }) => ({
  name,
  email,
  message,
  from_name: name,
  from_email: email,
  reply_to: email,
  to_name: "Charles Van Hook",
  subject: `Portfolio contact from ${name}`,
});

async function sendViaBrowserEmailJS(payload) {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    templateParams(payload),
    PUBLIC_KEY
  );
}

async function sendViaApi(payload) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.ok === false) {
    const err = new Error(data.error || data.message || `API failed (${res.status})`);
    err.status = res.status;
    err.text = data.error || data.message || res.statusText;
    throw err;
  }
  return { status: 200, text: "OK", provider: data.provider || "api" };
}

function openMailtoFallback({ name, email, message }) {
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(
    `${message}\n\n—\nFrom: ${name} <${email}>`
  );
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  return {
    status: 200,
    text: "OK",
    provider: "mailto",
    warning: `Opened your email app — please hit send. Or write ${CONTACT_EMAIL} directly.`,
  };
}

/**
 * Prefer browser EmailJS (works without enabling non-browser API access).
 * Fall back to /api/contact, then mailto.
 */
const mail = async ({ name, email, message }) => {
  try {
    const res = await sendViaBrowserEmailJS({ name, email, message });
    return { ...res, provider: "emailjs" };
  } catch (browserErr) {
    console.warn(
      "Browser EmailJS failed, trying API:",
      browserErr?.text || browserErr?.message || browserErr
    );
    try {
      return await sendViaApi({ name, email, message });
    } catch (apiErr) {
      console.warn(
        "Contact API failed, opening mailto:",
        apiErr?.text || apiErr?.message || apiErr
      );
      return openMailtoFallback({ name, email, message });
    }
  }
};

export default mail;

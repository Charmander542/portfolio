import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_5avm3vi";
const TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_64ipuas";
const PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "DIYG-tnEaBcHqjFDa";

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "vanhookch@gmail.com";

const emailjsParams = ({ name, email, message }) => ({
  name,
  email,
  message,
  from_name: name,
  from_email: email,
  reply_to: email,
  to_name: "Charles Van Hook",
  subject: `Portfolio contact from ${name}`,
});

async function sendViaEmailJS(payload) {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    emailjsParams(payload),
    PUBLIC_KEY
  );
}

async function sendViaFormSubmit({ name, email, message }) {
  const res = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _replyto: email,
        _subject: `Portfolio contact from ${name}`,
        _template: "table",
        _captcha: "false",
      }),
    }
  );

  const contentType = res.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    const err = new Error("Fallback mail provider blocked the request.");
    err.status = res.status;
    err.text = err.message;
    throw err;
  }

  const data = await res.json();
  if (!res.ok || data.success === "false" || data.error) {
    const err = new Error(
      data.message || data.error || `FormSubmit failed (${res.status})`
    );
    err.status = res.status;
    err.text = data.message || data.error || res.statusText;
    throw err;
  }

  return { status: 200, text: "OK", provider: "formsubmit", data };
}

function openMailtoFallback({ name, email, message }) {
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(
    `${message}\n\n—\nFrom: ${name} <${email}>`
  );
  const href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  window.location.href = href;
  return { status: 200, text: "OK", provider: "mailto" };
}

function isEmailJsAuthError(err) {
  const text = `${err?.text || ""} ${err?.message || ""}`.toLowerCase();
  return (
    err?.status === 412 ||
    text.includes("invalid grant") ||
    text.includes("reconnect your gmail")
  );
}

/**
 * Try EmailJS → FormSubmit → mailto compose window.
 * EmailJS currently fails with Gmail "Invalid grant" until reconnected in the
 * EmailJS dashboard; the fallbacks keep the form usable in the meantime.
 */
const mail = async ({ name, email, message }) => {
  try {
    const res = await sendViaEmailJS({ name, email, message });
    return { ...res, provider: "emailjs" };
  } catch (emailjsErr) {
    console.warn(
      "EmailJS send failed:",
      emailjsErr?.text || emailjsErr?.message || emailjsErr
    );

    try {
      return await sendViaFormSubmit({ name, email, message });
    } catch (fallbackErr) {
      console.warn(
        "FormSubmit fallback failed:",
        fallbackErr?.text || fallbackErr?.message || fallbackErr
      );

      // Last resort: open the visitor's mail client so the message isn't lost.
      const mailto = openMailtoFallback({ name, email, message });
      mailto.warning = isEmailJsAuthError(emailjsErr)
        ? "Opened your email app because the site mail service is disconnected. Please also reconnect Gmail in EmailJS."
        : "Opened your email app as a backup. Please send from there.";
      return mailto;
    }
  }
};

export default mail;

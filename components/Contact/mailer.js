export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "vanhookch@gmail.com";

/**
 * Send contact mail through our API route so the EmailJS private key never
 * ships to the browser. Falls back to mailto if the API is unavailable.
 */
const mail = async ({ name, email, message }) => {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok || data.ok === false) {
      const err = new Error(
        data.error || data.message || `Send failed (${res.status})`
      );
      err.status = res.status;
      err.text = data.error || data.message || res.statusText;
      throw err;
    }

    return { status: 200, text: "OK", provider: data.provider || "api" };
  } catch (apiErr) {
    console.warn("Contact API failed, opening mailto fallback:", apiErr);

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\n—\nFrom: ${name} <${email}>`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    return {
      status: 200,
      text: "OK",
      provider: "mailto",
      warning:
        apiErr?.text ||
        apiErr?.message ||
        `Opened your email app — please hit send. Or write ${CONTACT_EMAIL} directly.`,
    };
  }
};

export default mail;

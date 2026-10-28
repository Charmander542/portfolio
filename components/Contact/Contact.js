import { useState, useEffect, useRef } from "react";
import Filter from "bad-words";
import { MENULINKS } from "../../constants";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import mail, { CONTACT_EMAIL } from "./mailer";
import gsap from "gsap";
import styles from "./Contact.module.scss";

const filter = new Filter();
filter.removeWords("hell", "god", "shit");

const MIN_FILL_MS = 2000;

const toastStyle = {
  borderRadius: "10px",
  background: "#333",
  color: "#fff",
};

function makeCaptcha() {
  const ops = [
    () => {
      const a = 2 + Math.floor(Math.random() * 9);
      const b = 1 + Math.floor(Math.random() * 9);
      return { prompt: `${a} + ${b}`, answer: a + b };
    },
    () => {
      const a = 6 + Math.floor(Math.random() * 9);
      const b = 1 + Math.floor(Math.random() * 5);
      return { prompt: `${a} − ${b}`, answer: a - b };
    },
    () => {
      const a = 2 + Math.floor(Math.random() * 5);
      const b = 2 + Math.floor(Math.random() * 4);
      return { prompt: `${a} × ${b}`, answer: a * b };
    },
  ];
  return ops[Math.floor(Math.random() * ops.length)]();
}

const Contact = () => {
  const initialState = { name: "", email: "", message: "", company: "" };
  const [formData, setFormData] = useState(initialState);
  const [captchaPrompt, setCaptchaPrompt] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const buttonEl = useRef(null);
  const mountedAt = useRef(Date.now());
  const animating = useRef(false);
  const captchaAnswer = useRef(null);

  const refreshCaptcha = () => {
    const next = makeCaptcha();
    captchaAnswer.current = next.answer;
    setCaptchaPrompt(next.prompt);
    setCaptchaInput("");
  };

  useEffect(() => {
    mountedAt.current = Date.now();
    refreshCaptcha();
  }, []);

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setFormData((prev) => {
      if (value.length > prev[id].length) {
        return { ...prev, [id]: filter.clean(value) };
      }
      return { ...prev, [id]: value };
    });
  };

  const captchaPassed =
    captchaInput.trim() !== "" &&
    Number(captchaInput.trim()) === captchaAnswer.current;

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());

  const playSuccessAnimation = () => {
    const btn = buttonEl.current;
    if (!btn || animating.current) return;
    animating.current = true;
    btn.classList.add("active");

    gsap.to(btn, {
      keyframes: [
        {
          "--left-wing-first-x": 50,
          "--left-wing-first-y": 100,
          "--right-wing-second-x": 50,
          "--right-wing-second-y": 100,
          duration: 0.2,
          onComplete() {
            gsap.set(btn, {
              "--left-wing-first-y": 0,
              "--left-wing-second-x": 40,
              "--left-wing-second-y": 100,
              "--left-wing-third-x": 0,
              "--left-wing-third-y": 100,
              "--left-body-third-x": 40,
              "--right-wing-first-x": 50,
              "--right-wing-first-y": 0,
              "--right-wing-second-x": 60,
              "--right-wing-second-y": 100,
              "--right-wing-third-x": 100,
              "--right-wing-third-y": 100,
              "--right-body-third-x": 60,
            });
          },
        },
        {
          "--left-wing-third-x": 20,
          "--left-wing-third-y": 90,
          "--left-wing-second-y": 90,
          "--left-body-third-y": 90,
          "--right-wing-third-x": 80,
          "--right-wing-third-y": 90,
          "--right-body-third-y": 90,
          "--right-wing-second-y": 90,
          duration: 0.2,
        },
        {
          "--rotate": 50,
          "--left-wing-third-y": 95,
          "--left-wing-third-x": 27,
          "--right-body-third-x": 45,
          "--right-wing-second-x": 45,
          "--right-wing-third-x": 60,
          "--right-wing-third-y": 83,
          duration: 0.25,
        },
        {
          "--rotate": 60,
          "--plane-x": -8,
          "--plane-y": 40,
          duration: 0.2,
        },
        {
          "--rotate": 40,
          "--plane-x": 45,
          "--plane-y": -300,
          "--plane-opacity": 0,
          duration: 0.375,
          onComplete() {
            window.setTimeout(() => {
              if (!buttonEl.current) {
                animating.current = false;
                return;
              }
              buttonEl.current.removeAttribute("style");
              gsap.fromTo(
                buttonEl.current,
                { opacity: 0, y: -8 },
                {
                  opacity: 1,
                  y: 0,
                  clearProps: true,
                  duration: 0.3,
                  onComplete() {
                    buttonEl.current?.classList.remove("active");
                    animating.current = false;
                  },
                }
              );
            }, 1200);
          },
        },
      ],
    });

    gsap.to(btn, {
      keyframes: [
        {
          "--text-opacity": 0,
          "--border-radius": 0,
          "--left-wing-background": "#ffda55",
          "--right-wing-background": "#ffda55",
          duration: 0.11,
        },
        {
          "--left-wing-background": "#ffda55",
          "--right-wing-background": "#ffda55",
          duration: 0.14,
        },
        {
          "--left-body-background": "#ffda55",
          "--right-body-background": "#ffda55",
          duration: 0.25,
          delay: 0.1,
        },
        {
          "--trails-stroke": 171,
          duration: 0.22,
          delay: 0.22,
        },
        {
          "--success-opacity": 1,
          "--success-x": 0,
          duration: 0.2,
          delay: 0.15,
        },
        {
          "--success-stroke": 0,
          duration: 0.15,
        },
      ],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending || animating.current) return;

    const { name, email, message, company } = formData;

    // Honeypot — bots fill the hidden company field; pretend success
    if (company.trim() !== "") {
      toast.success("Message sent successfully", {
        id: "success",
        style: toastStyle,
      });
      setFormData(initialState);
      return;
    }

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill the required fields", {
        id: "error",
        style: toastStyle,
      });
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address", {
        id: "error",
        style: toastStyle,
      });
      return;
    }

    if (!captchaPassed) {
      toast.error("Solve the captcha to send your message.", {
        id: "captcha",
        style: toastStyle,
      });
      refreshCaptcha();
      return;
    }

    if (Date.now() - mountedAt.current < MIN_FILL_MS) {
      toast.error(
        "Please take a moment to review your message, then try again.",
        { id: "fast", style: toastStyle }
      );
      return;
    }

    setIsSending(true);
    try {
      const res = await mail({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      });

      if (res?.status === 200 || res?.text === "OK") {
        if (res.provider === "mailto") {
          toast.success(
            res.warning ||
              `Opened your email app — please hit send. Or write ${CONTACT_EMAIL} directly.`,
            { id: "success", style: toastStyle, duration: 7000 }
          );
        } else {
          toast.success("Message sent successfully", {
            id: "success",
            style: toastStyle,
          });
          playSuccessAnimation();
        }
        setFormData(initialState);
        refreshCaptcha();
        mountedAt.current = Date.now();
      } else {
        throw new Error(res?.text || "Unexpected response");
      }
    } catch (err) {
      console.error("Contact form send failed:", err);
      toast.error(
        err?.text ||
          err?.message ||
          `Could not send. Please email ${CONTACT_EMAIL} directly.`,
        { id: "error", style: toastStyle, duration: 7000 }
      );
      refreshCaptcha();
    } finally {
      setIsSending(false);
    }
  };

  const canSubmit =
    captchaPassed &&
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.message.trim() !== "" &&
    !isSending;

  return (
    <section
      className="mt-30 w-full relative select-none bg-gray-dark-5 pt-20 sm:pt-10 md:pt-5 lg:pt-1 pb-20"
      id={MENULINKS[4].ref}
    >
      <div>
        <Toaster />
      </div>
      <div className="section-container flex flex-col justify-center">
        <div className="flex flex-col work-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 seq">
              CONTACT
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit seq">
              Contact
            </h1>
          </div>
          <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 seq">
            Get In Touch.{" "}
          </h2>
        </div>

        <form
          className="pt-10 sm:mx-auto sm:w-[30rem] md:w-[35rem]"
          onSubmit={handleSubmit}
          noValidate
        >
          <motion.div
            initial={{ opacity: 0, y: 64 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "-10000px",
                top: "auto",
                width: 1,
                height: 1,
                overflow: "hidden",
              }}
            >
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                className="block w-full h-12 sm:h-14 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-yellow bg-transparent rounded-[0.6rem] transition-all duration-200 focus:bg-gray-dark-5 active:bg-gray-dark-5"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="name"
                className="absolute top-0 left-0 h-full flex items-center pl-4 text-lg font-mono transform transition-all"
              >
                Name
              </label>
            </div>

            <div className="relative mt-14">
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                className="block w-full h-12 sm:h-14 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-yellow bg-transparent rounded-[0.6rem] transition-all duration-200 focus:bg-gray-dark-5 active:bg-gray-dark-5"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="email"
                className="absolute top-0 left-0 h-full flex items-center pl-4 text-lg font-mono transform transition-all"
              >
                Email
              </label>
            </div>

            <div className="relative mt-14">
              <textarea
                id="message"
                name="message"
                className="block w-full h-auto min-h-[10rem] max-h-[20rem] sm:h-14 py-2 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-yellow bg-transparent rounded-[0.6rem] transition-all duration-200 focus:bg-gray-dark-5 active:bg-gray-dark-5"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="message"
                className="absolute top-0 left-0 h-14 flex items-center pl-4 text-lg font-mono transform transition-all"
              >
                Message
              </label>
            </div>
          </motion.div>

          <div className="mt-6 flex flex-col items-center gap-4">
            <div
              className="w-full max-w-sm rounded-xl border border-gray-dark-1 px-4 py-3"
              style={{ background: "rgba(255,255,0,0.04)" }}
            >
              <div className="flex items-center justify-between gap-3 mb-2">
                <p className="font-mono text-xs uppercase tracking-widest text-gray-light-3">
                  Captcha
                </p>
                <button
                  type="button"
                  onClick={refreshCaptcha}
                  className="font-mono text-xs text-yellow hover:underline"
                  aria-label="Refresh captcha"
                >
                  Refresh
                </button>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="flex-1 font-mono text-lg sm:text-xl text-yellow select-none px-3 py-2 rounded-lg border border-yellow/40 text-center tracking-wider"
                  style={{
                    background:
                      "repeating-linear-gradient(-45deg, rgba(255,255,0,0.06), rgba(255,255,0,0.06) 6px, transparent 6px, transparent 12px)",
                  }}
                  aria-hidden="true"
                >
                  {captchaPrompt || "…"} = ?
                </div>
                <input
                  id="captcha"
                  name="captcha"
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  placeholder="Answer"
                  value={captchaInput}
                  onChange={(e) =>
                    setCaptchaInput(e.target.value.replace(/[^\d-]/g, ""))
                  }
                  className="w-24 h-12 px-3 font-mono text-lg outline-none border-2 border-yellow bg-transparent rounded-lg text-center focus:bg-gray-dark-5"
                  aria-label="Captcha answer"
                  required
                />
              </div>
              {captchaInput && !captchaPassed && (
                <p className="mt-2 font-mono text-xs text-red-400">
                  Incorrect — try again or refresh.
                </p>
              )}
              {captchaPassed && (
                <p className="mt-2 font-mono text-xs" style={{ color: "rgba(255,255,0,0.75)" }}>
                  Captcha passed
                </p>
              )}
            </div>

            <button
              type="submit"
              className={`${styles.button}${canSubmit ? ` ${styles.withHover}` : ""}`}
              ref={buttonEl}
              disabled={!canSubmit}
            >
              <span className={styles.default}>
                {isSending ? "Sending…" : "Send ->"}
              </span>
              <span className={styles.success}>
                <svg viewBox="0 0 16 16">
                  <polyline points="3.75 9 7 12 13 5"></polyline>
                </svg>
                Sent
              </span>
              <svg className={styles.trails} viewBox="0 0 33 64">
                <path d="M26,4 C28,13.3333333 29,22.6666667 29,32 C29,41.3333333 28,50.6666667 26,60"></path>
                <path d="M6,4 C8,13.3333333 9,22.6666667 9,32 C9,41.3333333 8,50.6666667 6,60"></path>
              </svg>
              <div className={styles.plane}>
                <div className={styles.left}></div>
                <div className={styles.right}></div>
              </div>
            </button>

            <p className="text-xs font-mono text-gray-light-3 text-center max-w-sm">
              Or email{" "}
              <a
                className="text-yellow underline"
                href={`mailto:${CONTACT_EMAIL}`}
              >
                {CONTACT_EMAIL}
              </a>{" "}
              directly.
            </p>
          </div>
        </form>
      </div>
      <style>{`
        input,
        label,
        textarea {
          cursor: pointer;
        }

        input:hover,
        textarea:hover {
          box-shadow: 0 0 0.3rem #ffff00;
        }

        input:active,
        input:focus,
        textarea:active,
        textarea:focus {
          box-shadow: 0 0 0.3rem #120e16;
        }

        input:focus + label,
        input:valid + label {
          height: 50%;
          padding-left: 0;
          transform: translateY(-100%);
        }

        textarea:focus + label,
        textarea:valid + label {
          height: 17%;
          padding-left: 0;
          transform: translateY(-100%);
        }

        button:disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
};

export default Contact;

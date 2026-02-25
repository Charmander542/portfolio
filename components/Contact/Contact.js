import { useState, useEffect, useRef } from "react";
import Filter from "bad-words";
import { MENULINKS } from "../../constants";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import mail from "./mailer";
import gsap from "gsap";
import styles from "./Contact.module.scss";

const filter = new Filter();
filter.removeWords("hell", "god", "shit");

// djb2 hash — fast, synchronous, good enough for PoW
function djb2(str) {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) ^ str.charCodeAt(i);
    hash = hash & hash;
  }
  return (hash >>> 0).toString(16).padStart(8, "0");
}

// Solve: find nonce where djb2(challenge+nonce) starts with "0000"
// Avg ~65k iterations — runs in < 10ms in modern browsers
function solvePoW(challenge) {
  let nonce = 0;
  while (nonce < 5_000_000) {
    if (djb2(challenge + nonce).startsWith("0000")) return nonce;
    nonce++;
  }
  return -1;
}

const empty = () =>
  toast.error("Please fill the required fields", {
    id: "error",
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });

const error = () =>
  toast.error("Error sending your message", {
    id: "error",
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });

const success = () =>
  toast.success("Message sent successfully", {
    id: "success",
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });

const Contact = () => {
  const initialState = { name: "", email: "", message: "" };
  const [formData, setFormData] = useState(initialState);
  const [mailerResponse, setMailerResponse] = useState("not initiated");
  const [isSending, setIsSending] = useState(false);
  const buttonEl = useRef(null);

  // Proof-of-Work state
  const [powStatus, setPowStatus] = useState("solving"); // "solving" | "solved"
  const powRef = useRef({ challenge: "", nonce: -1 });

  useEffect(() => {
    const challenge =
      Math.random().toString(36).substring(2) + Date.now().toString(36);
    // Defer to avoid blocking initial render
    const id = setTimeout(() => {
      const nonce = solvePoW(challenge);
      powRef.current = { challenge, nonce };
      setPowStatus("solved");
    }, 50);
    return () => clearTimeout(id);
  }, []);

  const handleChange = ({ target }) => {
    const { id, value } = target;
    value.length === 0 ? setIsSending(false) : setIsSending(true);
    setFormData((prevVal) => {
      if (
        value.trim() !== prevVal[id] &&
        value.trim().length > prevVal[id].trim().length
      ) {
        return { ...prevVal, [id]: filter.clean(value.trim()) };
      } else {
        return { ...prevVal, [id]: value };
      }
    });
  };

  const emptyForm = () => {
    setFormData(initialState);
  };

  const checkTextFields = () => {
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");

    const button = document.querySelector(`.${styles.button}`);

    if (
      nameField.value.trim() !== "" &&
      emailField.value.trim() !== "" &&
      messageField.value.trim() !== ""
    ) {
      button.classList.add(styles.withHover);
    } else {
      button.classList.remove(styles.withHover);
    }
  };

  useEffect(() => {
    document.getElementById("name").addEventListener("input", checkTextFields);
    document.getElementById("email").addEventListener("input", checkTextFields);
    document.getElementById("message").addEventListener("input", checkTextFields);
  }, []);
  
  const isValidEmail = (email) => {
    // Add a regular expression to validate the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const { name, email, message } = formData;
  
    if (name === "" || email === "" || message === "") {
      empty();
      return setMailerResponse("empty");
    }
  
    if (!isValidEmail(email)) {
      return setMailerResponse("invalidEmail");
    }

    // Verify proof-of-work
    const { challenge, nonce } = powRef.current;
    if (powStatus !== "solved" || nonce === -1 || !djb2(challenge + nonce).startsWith("0000")) {
      toast.error("Security check failed. Please refresh and try again.", {
        id: "pow",
        style: { borderRadius: "10px", background: "#333", color: "#fff" },
      });
      return;
    }
  
    setIsSending(true);
    mail({ name, email, message })
      .then((res) => {
        if (res.status === 200) {
          setMailerResponse("success");
          emptyForm();
        } else {
          setMailerResponse("error");
        }
      })
      .catch((err) => {
        setMailerResponse("error");
        console.error(err);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setMailerResponse("not initiated");
    }, 10000);
  }, [mailerResponse]);

  useEffect(() => {
    buttonEl.current.addEventListener("click", (e) => {
      if (!buttonEl.current.classList.contains("active")) {
        buttonEl.current.classList.add("active");

        gsap.to(buttonEl.current, {
          keyframes: [
            {
              "--left-wing-first-x": 50,
              "--left-wing-first-y": 100,
              "--right-wing-second-x": 50,
              "--right-wing-second-y": 100,
              duration: 0.2,
              onComplete() {
                gsap.set(buttonEl.current, {
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
                setTimeout(() => {
                  buttonEl.current.removeAttribute("style");
                  gsap.fromTo(
                    buttonEl.current,
                    {
                      opacity: 0,
                      y: -8,
                    },
                    {
                      opacity: 1,
                      y: 0,
                      clearProps: true,
                      duration: 0.3,
                      onComplete() {
                        buttonEl.current.classList.remove("active");
                      },
                    }
                  );
                }, 1800);
              },
            },
          ],
        });

        gsap.to(buttonEl.current, {
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
              "--left-body-background": "##ffda55",
              "--right-body-background": "##ffda55",
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
      }
    });
  }, [buttonEl]);

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

        <form className="pt-10 sm:mx-auto sm:w-[30rem] md:w-[35rem]">
          <motion.div initial={{ opacity: 0, y: 64 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="relative">
              <input
                type="text"
                id="name"
                className="block w-full h-12 sm:h-14 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-yellow bg-transparent rounded-[0.6rem] transition-all duration-200 focus:bg-gray-dark-5  active:bg-gray-dark-5"
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
                type="text"
                id="email"
                className="block w-full h-12 sm:h-14 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-yellow bg-transparent rounded-[0.6rem] transition-all duration-200 focus:bg-gray-dark-5  active:bg-gray-dark-5"
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
                className="block w-full h-auto min-h-[10rem] max-h-[20rem] sm:h-14 py-2 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-yellow bg-transparent rounded-[0.6rem] transition-all duration-200 focus:bg-gray-dark-5  active:bg-gray-dark-5"
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

          {mailerResponse !== "not initiated" &&
            (mailerResponse === "success" ? (
              <div className="hidden">{success()}</div>
            ) : (
              <div className="hidden">{error()}</div>
            ))}
        </form>
        <div className="mt-6 mx-auto flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-xs font-mono">
            {powStatus === "solving" ? (
              <>
                <svg className="animate-spin" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
                <span className="text-gray-400">Running security check…</span>
              </>
            ) : (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFF00" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span style={{ color: "rgba(255,255,0,0.7)" }}>Security verified</span>
              </>
            )}
          </div>
          <button
            className={styles.button}
            ref={buttonEl}
            disabled={
              powStatus !== "solved" ||
              formData.name === "" ||
              formData.email === "" ||
              formData.message === ""
            }
            onClick={handleSubmit}
          >
            <span className={styles.default}>Send -&gt;</span>
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
        </div>
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
      `}</style>
    </section>
  );
};

export default Contact;

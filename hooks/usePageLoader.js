import { useState, useEffect, useRef } from "react";

/**
 * Waits for the page to actually finish loading (window "load" event)
 * and holds the loader for a random minimum duration so the animation
 * never just flashes and disappears.
 *
 * @param {object} [opts]
 * @param {number} [opts.minMs=1000]  Minimum loader duration (ms)
 * @param {number} [opts.jitterMs=800] Added random jitter range (ms)
 * @returns {{ isLoading: boolean, animSpeed: string }}
 *   animSpeed – a CSS duration string (e.g. "1.4s") to drive the progress bar
 */
export function usePageLoader({ minMs = 1000, jitterMs = 800 } = {}) {
  const [isLoading, setIsLoading] = useState(true);
  // Stable random speed for the Loader animation (1.2s – 2.2s)
  const animSpeed = useRef(`${(1.2 + Math.random() * 1.0).toFixed(2)}s`).current;

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.history.scrollRestoration = "manual";

    const minDuration = minMs + Math.random() * jitterMs;
    const startTime = Date.now();

    const finish = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minDuration - elapsed);
      const id = setTimeout(() => setIsLoading(false), remaining);
      return () => clearTimeout(id);
    };

    if (document.readyState === "complete") {
      return finish();
    }

    window.addEventListener("load", finish, { once: true });
    return () => window.removeEventListener("load", finish);
  }, [minMs, jitterMs]);

  return { isLoading, animSpeed };
}

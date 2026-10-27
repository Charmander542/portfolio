import { useEffect } from "react";
import { useRouter } from "next/router";

/** Legacy misspelled URL — redirect to /projects/accessibility_controller */
export default function AccesabilityControllerRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/projects/accessibility_controller");
  }, [router]);
  return null;
}

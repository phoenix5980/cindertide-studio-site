import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

function detectMobileOrIOS() {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return false;
  }

  const isSmallViewport = window.innerWidth < MOBILE_BREAKPOINT;
  const ua = navigator.userAgent;
  const isiOSDevice =
    /iPad|iPhone|iPod/i.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  return isSmallViewport || isiOSDevice;
}

export function useIsMobileOrIOS() {
  const [isMobileOrIOS, setIsMobileOrIOS] = useState(false);

  useEffect(() => {
    const update = () => {
      setIsMobileOrIOS(detectMobileOrIOS());
    };

    update();
    window.addEventListener("resize", update, { passive: true });
    window.addEventListener("orientationchange", update, { passive: true });

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  return isMobileOrIOS;
}

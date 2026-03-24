import { useEffect, useState } from "react";

function detectDesktopSafari() {
  if (typeof navigator === "undefined") {
    return false;
  }

  const ua = navigator.userAgent;
  const isSafariEngine =
    /Safari/i.test(ua) && !/Chrome|Chromium|CriOS|Edg|OPR|Firefox|FxiOS/i.test(ua);
  const isTouchMac = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  const isMobile = /Mobile|Android|iPhone|iPad|iPod/i.test(ua) || isTouchMac;

  return isSafariEngine && !isMobile;
}

export function useIsSafari() {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    setIsSafari(detectDesktopSafari());
  }, []);

  return isSafari;
}

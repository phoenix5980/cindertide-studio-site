import { StrictMode, startTransition } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

const REDIRECT_KEY = "gh-pages-redirect";
const pendingRedirect = sessionStorage.getItem(REDIRECT_KEY);

if (pendingRedirect) {
  sessionStorage.removeItem(REDIRECT_KEY);
  if (pendingRedirect !== `${window.location.pathname}${window.location.search}${window.location.hash}`) {
    window.history.replaceState(null, "", pendingRedirect);
  }
}

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter />
    </StrictMode>,
  );
});

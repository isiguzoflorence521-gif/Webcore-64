if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").then(registration => {

      // Listen for new service worker installation
      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;

        if (!newWorker) return;

        newWorker.addEventListener("statechange", () => {
          if (
            newWorker.state === "installed" &&
            navigator.serviceWorker.controller
          ) {
            console.log("[Webcore-64] Update found. Refreshing...");

            // Optional delay for smoother UX
            setTimeout(() => {
              window.location.reload();
            }, 500);
          }
        });
      });

    }).catch(error => {
      console.error("[Webcore-64] Service Worker registration failed:", error);
    });
  });
}

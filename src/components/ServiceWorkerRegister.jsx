"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service.js")
          .then((registration) => {
            console.log(
              "[Service Worker] Registered successfully:",
              registration.scope
            );
          })
          .catch((error) => {
            console.error(
              "[Service Worker] Registration failed:",
              error
            );
          });
      });
    }
  }, []);

  return null;
}
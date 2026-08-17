const CACHE_NAME = "subhasmita-portfolio-v1";

const STATIC_ASSETS = [
  "/",
  "/offline.html",

  // Hero assets
  "/videos/video.mp4",
  "/photos/photo.png",

  // 3D model
  "/models/model.glb",

  // Resume
  "/resume.pdf",

  // Profile
  "/userAsset/gif.jpg",

  // Skill video
  "/videos/skills.webm",

  // Experience logos
  "/photos/Somniate-Tech.png",
  "/photos/World_Wide_Technology.png",
  "/photos/infosys-springboard.avif",

  // Project images
  "/photos/project-1.png",
  "/photos/project-2.png",
  "/photos/project-3.png",
  "/photos/project-4.png",
  "/photos/project-5.png",
  "/photos/project-6.png",
  "/photos/project-7.png",
  "/photos/project-8.png",
];

/* ----------------------------------
   INSTALL
----------------------------------- */

self.addEventListener("install", (event) => {
  console.log("[Service Worker] Installing...");

  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("[Service Worker] Caching assets");

        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log("[Service Worker] Installation complete");

        return self.skipWaiting();
      })
      .catch((error) => {
        console.error(
          "[Service Worker] Failed to cache assets:",
          error
        );
      })
  );
});

/* ----------------------------------
   ACTIVATE
----------------------------------- */

self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Activating...");

  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => cacheName !== CACHE_NAME)
            .map((cacheName) => {
              console.log(
                "[Service Worker] Removing old cache:",
                cacheName
              );

              return caches.delete(cacheName);
            })
        );
      })
      .then(() => self.clients.claim())
  );
});
/* ----------------------------------
   FETCH
----------------------------------- */

self.addEventListener("fetch", (event) => {
  const request = event.request;

  // Only handle GET requests
  if (request.method !== "GET") {
    return;
  }

  /*
   * NAVIGATION REQUEST
   *
   * When the user opens/reloads the portfolio
   * while offline, explicitly return the cached
   * homepage instead of trying to match the
   * navigation request directly.
   */
if (request.mode === "navigate") {
  const url = new URL(request.url);

  // Allow special files to load normally
  if (url.pathname === "/resume.pdf" || url.pathname === "/robots.txt") {
    event.respondWith(
      fetch(request).catch(() => caches.match(request))
    );

    return;
  }

  event.respondWith(
    caches.match("/").then((cachedHomePage) => {
      if (cachedHomePage) {
        return cachedHomePage;
      }

      return fetch(request).catch(() => {
        return caches.match("/offline.html");
      });
    })
  );

  return;
}

  /*
   * STATIC ASSETS
   *
   * Images, videos, JavaScript, CSS, models, etc.
   * are loaded from cache first.
   */
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(request)
        .then((networkResponse) => {
          if (
            networkResponse &&
            networkResponse.status === 200 &&
            networkResponse.type === "basic"
          ) {
            const responseClone = networkResponse.clone();

            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }

          return networkResponse;
        })
        .catch(() => {
          return new Response("", {
            status: 503,
            statusText: "Offline",
          });
        });
    })
  );
});
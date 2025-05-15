const CACHE_NAME = "ganja-guru-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/public/css/style.css",
  "/public/js/main.js",
  "/public/images/icon-192x192.png",
  "/public/images/icon-512x512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
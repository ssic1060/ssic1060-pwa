const CACHE_NAME = 'ssic1060-pwa-v2';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Always fetch the portal from the network.
  // Do not cache login pages or student information.
  if (event.request.method !== 'GET') return;

  event.respondWith(fetch(event.request));
});

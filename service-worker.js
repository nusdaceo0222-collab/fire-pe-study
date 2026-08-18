/* fire-pe-study offline cache
 * MathJax is self-hosted. No CDN is required for formula rendering.
 */
const CACHE_NAME = 'fire-pe-study-v20260818-1';
const APP_CACHE_PREFIX = 'fire-pe-study-';

// These must be present for the app shell and formulas to work offline.
const CORE_ASSETS = [
  './',
  './index.html',
  './mathjax/es5/tex-svg-full.js'
];

// Cache these when they exist, but do not fail installation if one is absent.
// Existing repository assets referenced by index.html are listed here.
const OPTIONAL_ASSETS = [
  './manifest.json',
  './icon-192.png',
  './svg/103-4-6.svg',
  './svg/105-3-6.svg',
  './svg/139-3-6.svg',
  './svg/모25-5-2-2-3.svg',
  './svg/모25-5-9-1-3.svg',
  './svg/모25-9-11-2-3.svg',
  './svg/모26-5-5-2-1.svg'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(CORE_ASSETS);

    await Promise.allSettled(
      OPTIONAL_ASSETS.map(async url => {
        try {
          const response = await fetch(url, { cache: 'reload' });
          if (response.ok) await cache.put(url, response);
        } catch (_) {
          // Optional assets may not be present in every deployment.
        }
      })
    );

    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys
        .filter(key => key.startsWith(APP_CACHE_PREFIX) && key !== CACHE_NAME)
        .map(key => caches.delete(key))
    );
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Navigation: prefer fresh index, fall back to cached app shell offline.
  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const network = await fetch(request);
        if (network.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put('./index.html', network.clone());
        }
        return network;
      } catch (_) {
        return (await caches.match('./index.html')) || (await caches.match('./'));
      }
    })());
    return;
  }

  const pathname = url.pathname.toLowerCase();
  const isStatic =
    pathname.includes('/mathjax/') ||
    /\.(?:js|css|svg|webp|png|jpg|jpeg|gif|json|woff2?|ttf|otf)$/i.test(pathname);

  if (isStatic) {
    // Cache-first makes MathJax and viewed diagrams available offline.
    event.respondWith((async () => {
      const cached = await caches.match(request, { ignoreSearch: true });
      if (cached) return cached;

      const network = await fetch(request);
      if (network.ok) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, network.clone());
      }
      return network;
    })());
  }
});

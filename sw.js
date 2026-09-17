const CACHE_NAME = 'grimoire-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './page-turn.mp3',
  './quill-write.mp3',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
const CACHE_NAME = 'enjoylearning-pwa-v1-kids';

const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    'https://cdn.tailwindcss.com/',
    'https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&display=swap',
    'https://fonts.gstatic.com/s/baloo2/v20/kgsPKuE-4hJqpKzSlgA-v-T8S_0P_p9s.woff2'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
            .catch(error => console.error('[SW] Erro ao adicionar ao cache:', error))
    );
});

self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});
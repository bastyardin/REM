/* ============================================================
   UPRAVLJALEC NEPREMIČNIN — service worker (PWA, delo brez interneta)
   Ob spremembi aplikacije povečajte številko VERZIJA spodaj,
   da brskalniki prenesejo svežo kopijo.
   ============================================================ */
const VERZIJA = 'v4';
const PREDPOMNILNIK = 'upravljalec-nepremicnin-' + VERZIJA;

/* datoteke, ki sestavljajo aplikacijo (app shell) */
const DATOTEKE = [
  './',
  './index.html',
  './manifest.json',
  './ikona-192.png',
  './ikona-512.png'
];

/* ob namestitvi: shrani vse datoteke v predpomnilnik */
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(PREDPOMNILNIK).then((c) => c.addAll(DATOTEKE)).then(() => self.skipWaiting())
  );
});

/* ob aktivaciji: počisti stare verzije predpomnilnika */
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((kljuci) =>
      Promise.all(kljuci.filter((k) => k.startsWith('upravljalec-nepremicnin-') && k !== PREDPOMNILNIK).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

/* strategija:
   - datoteke aplikacije: najprej omrežje (sveža verzija), ob izpadu predpomnilnik
   - knjižnice s cdnjs (npr. za PDF): najprej predpomnilnik, sicer omrežje + shrani
   - vse ostalo (analitika ipd.): pusti brskalniku */
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;

  // knjižnice s cdnjs — predpomni ob prvi uporabi (PDF deluje tudi brez interneta)
  if (url.hostname === 'cdnjs.cloudflare.com') {
    e.respondWith(
      caches.match(e.request).then((zadetek) =>
        zadetek || fetch(e.request).then((odg) => {
          const kopija = odg.clone();
          caches.open(PREDPOMNILNIK).then((c) => c.put(e.request, kopija));
          return odg;
        })
      )
    );
    return;
  }

  // samo lastne datoteke (ista domena)
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    fetch(e.request)
      .then((odg) => {
        const kopija = odg.clone();
        caches.open(PREDPOMNILNIK).then((c) => c.put(e.request, kopija));
        return odg;
      })
      .catch(() => caches.match(e.request).then((z) => z || caches.match('./index.html')))
  );
});

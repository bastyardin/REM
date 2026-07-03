/* ============================================================
   UPRAVLJALEC NEPREMIČNIN — service worker (PWA, delo brez interneta)
   Ob spremembi aplikacije povečajte številko VERZIJA spodaj,
   da brskalniki prenesejo svežo kopijo.
   ============================================================ */
const VERZIJA = 'v11';
const PREDPOMNILNIK = 'upravljalec-nepremicnin-' + VERZIJA;

/* datoteke, ki sestavljajo aplikacijo (app shell) */
const DATOTEKE = [
  './',
  './index.html',
  './manifest.json',
  './ikona-192.png',
  './ikona-512.png'
];

/* zunanji knjižnici (PDF in QR koda) — predpomnita se že ob namestitvi,
   da delujeta brez interneta tudi, če ju uporabnik prej še ni uporabil */
const KNJIZNICE = [
  'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js'
];

/* ob namestitvi: shrani vse datoteke v predpomnilnik
   (cache:'reload' obide HTTP predpomnilnik — GitHub Pages sicer
   do 10 minut vrača staro kopijo); knjižnici sta zaželeni, a ne smeta
   preprečiti namestitve, če cdnjs ni dosegljiv */
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(PREDPOMNILNIK)
      .then((c) => c.addAll(DATOTEKE.map((u) => new Request(u, { cache: 'reload' })))
        .then(() => Promise.all(KNJIZNICE.map((u) => c.add(u).catch(() => null)))))
      .then(() => self.skipWaiting())
  );
});

/* ob aktivaciji: počisti stare verzije predpomnilnika in takoj prevzemi nadzor */
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((kljuci) =>
      Promise.all(kljuci.filter((k) => k.startsWith('upravljalec-nepremicnin-') && k !== PREDPOMNILNIK).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

/* strategija:
   - datoteke aplikacije: najprej omrežje BREZ HTTP predpomnilnika (vedno sveža
     verzija), ob izpadu interneta shranjena kopija
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
    fetch(e.request.url, { cache: 'no-store' })
      .then((odg) => {
        if (odg && odg.ok) {
          const kopija = odg.clone();
          caches.open(PREDPOMNILNIK).then((c) => c.put(e.request, kopija));
        }
        return odg;
      })
      .catch(() => caches.match(e.request).then((z) => z || caches.match('./index.html')))
  );
});

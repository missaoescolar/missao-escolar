/* Service worker: o site funciona sem internet depois da primeira visita.
   - Páginas (HTML): rede primeiro, para aparecer sempre a versão publicada; sem rede, a cópia guardada.
   - Scripts e estilos com ?v=…: a cache primeiro (uma versão nova tem um endereço novo, nunca há mistura).
   - Imagens e tipos de letra: a cache primeiro, guardadas quando são usadas.
   A VERSAO é atualizada por ferramentas/versao.cjs; as caches de versões antigas são apagadas. */
const VERSAO = "20261019-1737";
const CACHE = "missao-" + VERSAO;
const PAGINAS = ["./", "index.html", "6ano.html", "7ano.html", "caderno.html", "escrita.html", "gramatica.html", "pais.html", "planeador.html", "resumo.html",
  "manifest.webmanifest", "icon.svg", "icon-192.png", "favicon-32.png"];

self.addEventListener("install", e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await c.addAll(PAGINAS);
    // also every local script and stylesheet each page uses (exact versioned addresses)
    const extra = new Set();
    for(const p of PAGINAS.filter(p => p.endsWith(".html"))){
      try{
        const txt = await (await fetch(p, {cache:"no-cache"})).text();
        for(const m of txt.matchAll(/(?:src|href)="((?![a-z]+:)[^"#]+\.(?:js|css)(?:\?v=[^"]*)?)"/g)) extra.add(m[1]);
      }catch(err){}
    }
    await Promise.all([...extra].map(u => c.add(u).catch(() => {})));
    self.skipWaiting();
  })());
});

self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    for(const k of await caches.keys()) if(k.startsWith("missao-") && k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if(req.method !== "GET") return;
  const url = new URL(req.url);
  const local = url.origin === self.location.origin;
  const fonte = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if(!local && !fonte) return;   // external sites (PhET, museums…) are never intercepted

  if(req.mode === "navigate" || (local && url.pathname.endsWith(".html"))){
    e.respondWith((async () => {
      try{
        const r = await fetch(req);
        if(r.ok){ const c = await caches.open(CACHE); c.put(req, r.clone()); }
        return r;
      }catch(err){
        const c = await caches.open(CACHE);
        return (await c.match(req, {ignoreSearch:true})) || (await c.match("index.html")) || Response.error();
      }
    })());
    return;
  }

  e.respondWith((async () => {
    const c = await caches.open(CACHE);
    const hit = await c.match(req);
    if(hit) return hit;
    try{
      const r = await fetch(req);
      if(r.ok || r.type === "opaque") c.put(req, r.clone());
      return r;
    }catch(err){
      return Response.error();
    }
  })());
});

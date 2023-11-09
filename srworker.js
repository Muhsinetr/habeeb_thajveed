self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("static").then((cache) => {
      return cache.addAll([
        "./",
        "./page_2.js",
        "./myGif/hamza.gif",
        "./myGif/bah.gif",
        "./myGif/thah.gif",
        "./myGif/ssah.gif",
        "./myGif/jeem.gif",
        "./myGif/hah.gif",
        "./myGif/krah.gif",
        "./myGif/dal.gif",
        "./myGif/zal.gif",
        "./myGif/rah.gif",
        "./myGif/zah.gif",
        "./myGif/seen.gif",
        "./myGif/sheen.gif",
        "./myGif/swad.gif",
        "./myGif/lad.gif",
        "./myGif/twah.gif",
        "./myGif/lah.gif",
        "./myGif/ain.gif",
        "./myGif/goin.gif",
        "./myGif/fah.gif",
        "./myGif/qaf.gif",
        "./myGif/kaf.gif",
        "./myGif/lam.gif",
        "./myGif/meem.gif",
        "./myGif/noon.gif",
        "./myGif/hhah.gif",
        "./myGif/vav.gif",
        "./myGif/yah.gif",
        "audios/hamza.mp3",
        "audios/bah.mp3",
        "audios/thah.mp3",
        "audios/ssah.mp3",
        "audios/jeem.mp3",
        "audios/hah.mp3",
        "audios/krah.mp3",
        "audios/dal.mp3",
        "audios/zal.mp3",
        "audios/rah.mp3",
        "audios/zah.mp3",
        "audios/seen.mp3",
        "audios/sheen.mp3",
        "audios/swad.mp3",
        "audios/lad.mp3",
        "audios/twah.mp3",
        "audios/lah.mp3",
        "audios/ain.mp3",
        "audios/goin.mp3",
        "audios/fah.mp3",
        "audios/qaf.mp3",
        "audios/kaf.mp3",
        "audios/lam.mp3",
        "audios/meem.mp3",
        "audios/noon.mp3",
        "audios/hhah.mp3",
        "audios/vav.mp3",
        "audios/yah.mp3",
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

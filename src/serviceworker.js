const cacheName = "v1";

// const cacheAssets = [
//     "index.html",
//     "App.js"
// ]

self.addEventListener("install", (e) => {
    console.log("serviceWorkerInstalled", e);
    // e.waitUntil(
    //     caches
    //     .open(cacheName)
    //     .then(cache => {
    //         console.log("cache", cache);
    //         cache.addAll(cacheAssets);
    //     })
    //     .then(() => self.skipWaiting())
    //     .catch(err => console.log("Err", err))
    // );
});

self.addEventListener("activate", (e) => {
    console.log("serviceWorkerActivated", e);
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !== cacheName){
                        console.log("cache cleared");
                        return caches.delete(cache)
                    }
                })
                )
        })
    )
});

self.addEventListener("fetch", (e) => {
    console.log("fecth cached data", e);
    e.respondWith(
        // fetch(e.request).catch(err => caches.match(e.request))
        fetch(e.request)
        .then(res => {
            const resClone = res.clone();
            caches
            .open(cacheName)
            .then(cache => {
                cache.put(e.request, resClone);
            });
            return res;            
        }).catch(err => caches.match(e.request).then(res => res))
    )
})
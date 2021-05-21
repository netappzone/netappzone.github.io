'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "53a9c0a92f779188e8dc33ca4b5329ff",
"favicon.ico": "29bdef326ace76113765ba4351ee0584",
"index.html": "34b68df6639976479116c8d6ad66d171",
"/": "34b68df6639976479116c8d6ad66d171",
"main.dart.js": "b16bfcf684e62478b9645a8f73ba649c",
"favicon.png": "d9422e71c9d8ad3a4bae4fbc85991197",
"icons/Icon-192.png": "eb0d3f62242927ba7a8b783b597740d3",
"icons/Icon-512.png": "96d714e787acce9c305ac7d88bf2aedb",
"manifest.json": "4ee8dd154376255a123571b6e25fdfef",
"assets/AssetManifest.json": "2f4471b90e96711f60698509716355fb",
"assets/NOTICES": "e31748ad2d58a6c8ae78fbd2f922cafb",
"assets/FontManifest.json": "e0a478f3ca546c7b576a0cb71c717d23",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf": "c1678b46f7dd3f50ceac94ed4e0ad01a",
"assets/assets/cat/cat1.png": "abea19823be4332a9169c152a94f69a3",
"assets/assets/cat/cat2.png": "ff3b9554f4b15d4503ab82df2465b98f",
"assets/assets/cat/cat3.png": "3a459ce3a379629915aa1e0c58718703",
"assets/assets/cat/cat6.png": "13a7298bb79531b6f6c453ae6f479054",
"assets/assets/cat/cat4.png": "720232d53f193040c187bee847ca1ad6",
"assets/assets/cat/cat5.png": "f3b7d5d57520cc2d9ae6d56d439a68f8",
"assets/assets/images/baber.jpeg": "37c283fd07674824c37c321a2e2ee784",
"assets/assets/images/animals.jpg": "2e218a94e7842a946d772082ac8c5590",
"assets/assets/images/antarctica.jpg": "71e86242fca831839833d1caa23f107e",
"assets/assets/images/banner.png": "6079f8c488daec5082fb98b9e22314ed",
"assets/assets/images/asia.jpg": "bbcf97c1be29e77360e8407b7e2eaa05",
"assets/assets/images/australia.jpg": "6170e8a703652c6b814dca7020050086",
"assets/assets/images/slider1.png": "05c9f61fa9b070d4184e550c66e6e2e8",
"assets/assets/images/europe.jpg": "29a721b78efc7f928faf042c88806468",
"assets/assets/images/hair.jpeg": "5519cae5ef8e1841522fe0cc25fd14c0",
"assets/assets/images/slider2.png": "1351a132eb3211136c673d8af4489467",
"assets/assets/images/test1.png": "f683369e777719b60c683018b07e9ee2",
"assets/assets/images/africa.jpg": "27fc2c6667bd5bd7bba8117fafe28d86",
"assets/assets/images/test3.png": "822eae0ea27b6fd611ad5ba82af0a70b",
"assets/assets/images/test2.png": "bd746ed3efc9b18b7063c32b8a81c3ed",
"assets/assets/images/job6.png": "6fb9b5cca9fef01ae98b432f1983e227",
"assets/assets/images/fashion.jpeg": "90c0dd5d1548e363d2c7fe71f2987cb7",
"assets/assets/images/trekking.jpg": "283eae13ae9587874b93fed5c9b4a118",
"assets/assets/images/job5.png": "377fcbc27726c60f9bb3c09b41226e77",
"assets/assets/images/mask4.png": "875835dc581bb0d9cabfc758809e4b3a",
"assets/assets/images/job4.png": "3df3fd9d23ecc696271ca97d5acf3853",
"assets/assets/images/logo.png": "a4d6e0b37fef0bd46083da08935478b8",
"assets/assets/images/photography.jpeg": "b0d14d6d4a94d33404a7df1344e7533b",
"assets/assets/images/mask1.png": "b845a0e7d95d96467d7875ac7f211c3d",
"assets/assets/images/make_up.jpeg": "d5e0e394921818876e943b023631afee",
"assets/assets/images/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/assets/images/job1.png": "6530efae9b5d2be4ce33d57a7ee5719e",
"assets/assets/images/south_america.jpg": "1920c86e11a06921b339f00ff1d0ddea",
"assets/assets/images/cover.jpg": "e1e4b2e46b8d6eabb7330afb0c0d30ff",
"assets/assets/images/job3.png": "8da556f7baff6dae4c6e2d2d2ebf807e",
"assets/assets/images/mask2.png": "ad1a670e3051e497a435116e0c21aac9",
"assets/assets/images/mask3.png": "b2a7d59ce1be98212d1e5c2588db86a0",
"assets/assets/images/job2.png": "945fd34ea6136cd59997e512ecc7353b",
"assets/assets/images/north_america.jpg": "867d729d34a03bf38136bd45954ec218",
"assets/assets/images/hair2.jpeg": "e34a3d55a0d6a23ce2dbabd435d97bbd"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

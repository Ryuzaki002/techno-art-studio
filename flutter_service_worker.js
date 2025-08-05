'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5b1d8cb34d22eb3b535d1b96d42d8805",
".git/config": "3af5b3b258259ce323f2afee4e044a45",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b98c967da098bf43aef7012348afffdb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ee016686b1de2423c43c58ffcfd5c5fa",
".git/logs/refs/heads/gh-pages": "ee016686b1de2423c43c58ffcfd5c5fa",
".git/logs/refs/remotes/origin/gh-pages": "ad5f58d714869c255ccc5cad90dd44be",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/05/f41e6e16e08d455c6bee64a962aadae4ab9067": "6c480ca1f687fa05ea76c25c19f5cfd8",
".git/objects/0b/ea1726d4a0644cb1b556a437658af71ffbb729": "448b9165641fedc2f60fcfce07a0ce15",
".git/objects/12/726ceaae4edf8ec14ea780fc26e7823a40b953": "edd802e3c9132e4e04169fc9d2306d77",
".git/objects/13/a836763c5adb35e035fe72a2fe0049cda4878b": "7d57364ac39f3c8809b648fb42fc39b2",
".git/objects/1d/18679eeb7d585cb06915ac4e72199d717252f7": "566fefbf99b7a710f0f568cd52e06550",
".git/objects/1d/e2f421cb0ec64fec4cdfd921ce7eae770d0ab3": "05f608f74f46c0c276d05d43fc8a7ad9",
".git/objects/27/c2190b0f5a19719e4b465ff0852f0bac9857e1": "c75689853a3827a7b654b25b542f2012",
".git/objects/30/50dfbdff1e902bdf75d70cd23ad6e0dfd236f8": "20d423cc3f453052a86857ed713ae3ef",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/33/b767650ec600f485a07daabe5ad20d00f596ab": "b773a6124f9b49aac56e4e7b5f9c4a96",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3d/77c47d353a73f96ca66d10a182828d7f946ce9": "da902a05d83662c8dba5f132a45435dd",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/41/78b011e925e1e3daf43dea6b9be807211f0cb0": "d395132f28d4e0e8ec1af98a691b6eb7",
".git/objects/47/7695eaeeb6337cc8f09e1723be7372d6717d0d": "05e2bec13fc6ee7bba3be36f028ca088",
".git/objects/48/ba65ed33dff18e74c62b0f08d8165db64a3085": "9aa3a7fdcbc6e5a4b96701d6dc3f541c",
".git/objects/4b/c8c5c2cb976a12dd921a5a01cd99c0ba4f404a": "bff33699db01cd258dac6d3f331ae96f",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/17ac6f5b034e3ef3a7af5735960b15b20badae": "245a83b350fe72c5818d11210b525c4e",
".git/objects/4f/452db1b94c079193a5e2b63b73dbb7e8f4eb1e": "63f97ac30ea0b584938729e9099bf85a",
".git/objects/52/64da2aae8d214baf23091a12126006d21b6ce0": "bf05b825e9e9fd2f41875d4373cee3cb",
".git/objects/53/6a04844a8cb5db1fcb1d676ff68824a666436d": "19b5680adca9abda1046ad61d4837230",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5c/18c870c1fb79506150d27e0d5d05759c623af9": "18971dfa79a451730acabb74ddc2cfab",
".git/objects/5f/5f2c40eb0a123da45487837c3ee7e930ffda2f": "a7f5357a19316c09d1167679fbfc922c",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/62/e7a8a270250d982cc40c304e0d622663ef29d2": "d909d975a02201c2b0950539abed6b50",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/67/4f62f2dd89ca133393515f3127ab0856359c06": "361ea3c18e17d1872651cd82e5f22a49",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/71/34d6ef1963b608f26f30a97334e426aedff6ff": "25611e572b74fcce552ae05c91b1c147",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8c/d6a55ccb3d15a7114e1e487b8a2a5ca9e6b73c": "8ece52f2db9c514d8ea1699acb46bc05",
".git/objects/8e/bef491eb55b112605f2cda475dca821f6d5cd1": "747e2a848e4886841cb235dc8310c069",
".git/objects/8f/47fa574485fa992adb21e13c00e809fdce0a1f": "1b599faded3b70601b5cd9c14ef33ae5",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/7c6f03bcf843854d1151299bf2d241b0046232": "c265cd0e2775c0cae7b2e93c8da0c03d",
".git/objects/9c/8b3c9f6528666862f8e4912bb9f32a3bba6833": "041ed4c5054dafa404e5a478da059154",
".git/objects/a0/1bb4629ced34d084f29b796c445336209a8430": "e9629dc338d3a22163adef5ccd3bb43f",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b6/01ba5581c0ddfa69ef6c81113343e89c184998": "f010e7d54aedb39d52f112de8ab7e365",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/64f414ca2322386bc643eb5bbca5fc0fab2be2": "86ae60bd4410f1c07b4f297376af9795",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/48320df95ea8241c97e51058a32e623415de99": "d9f2500155e7740f522b8575f8bef03d",
".git/objects/c0/029a00db81e547463ca039215b90f71a5f9aef": "64c74b19b983b1f4f46a03889d875877",
".git/objects/c4/67080873642fc20dcbaf8cbb7a84ddc9850575": "246b4c22e0a18d6772d7d0ce735f7324",
".git/objects/d2/db5d932127639fb0216b29f1742bb90a56831b": "4abfc46b890efc98a753aea1f5e81779",
".git/objects/d3/ede6cc711683d03650c1261939f0ed9ccc8be4": "d2aaa4fef8efe6ca5aa39dea0c375e40",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e3/bb3aa4e0f919e4885e4a0ba2e49ed87cf97261": "3e37966574d7755c7b8764702830c73b",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f3/c36974d387f785a337b1eb561896ed5c6473de": "f57c9c298cde36796417cdc355a6727b",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fc/22aec2e76f11d648b1fce74aba3b7d1c6a5b0e": "0b8e9e25a393cb2855a71f804b552dae",
".git/objects/ff/ef6f1771bd4a57067fb5e4bcedf27e7e71748f": "3029a26e817097832572cf7115d35e51",
".git/refs/heads/gh-pages": "183417cb5773823d631a39d79ad6f0bf",
".git/refs/remotes/origin/gh-pages": "183417cb5773823d631a39d79ad6f0bf",
"assets/AssetManifest.bin": "84f6c4287659345f0b77bb7f5387fe8a",
"assets/AssetManifest.bin.json": "a0f6b0cba1dafe64b661c5d6cd45b697",
"assets/AssetManifest.json": "2da30bd8bc506de3cdcff04fd7694d6e",
"assets/assets/about_us.jpg": "dbfa280515713c3dcbf51fd0f9eccaf1",
"assets/assets/favicon.png": "d29438478f2c6dba3de2fa22f2048643",
"assets/assets/mainpage_background.jpg": "07f1ebc0efe4724ca708bde0ef79f5ae",
"assets/assets/service_images/app_development.jpg": "ee8cc026481e1d488edae3bc15690f19",
"assets/assets/service_images/branding_service.jpg": "865bef0c3dc792df7347f3ccc1708558",
"assets/assets/service_images/ecommerce_service.jpg": "8ae83b0e3356eccf6430b76c79519b71",
"assets/assets/service_images/ui_design.jpg": "3b847c1e1d765ae66f9be8d6770ab760",
"assets/assets/service_images/web_development.jpg": "4fbd7fbed4693cbd35e0e9188161b826",
"assets/FontManifest.json": "345bd1b22e67aab55d49aada2feed1d9",
"assets/fonts/bauhaus-medium-bt.ttf": "2fcb2e2415afca05633c3a8fd3c82768",
"assets/fonts/MaterialIcons-Regular.otf": "1d82e14f9fa711be560627294de45719",
"assets/fonts/montserrat-regular.ttf": "38712903602f88435ddddec98862f8b8",
"assets/NOTICES": "8b531dc046b62167e5aa530b37ebfb35",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "d29438478f2c6dba3de2fa22f2048643",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "f80173f021b48d47b7eaa33e751a7e16",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a04acfaa78fdc03a30f23fca7fcdce20",
"/": "a04acfaa78fdc03a30f23fca7fcdce20",
"main.dart.js": "34c2c44e6c2d24b051f469fd87783e09",
"manifest.json": "d2bd74983bfb7da497ced59a83f1f9dc",
"version.json": "735f7bca5e5d0aa385564b8578bf77e0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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

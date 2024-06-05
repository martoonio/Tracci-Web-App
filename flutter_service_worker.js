'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "56fc5a2340524f365d4edf295986c9f0",
".git/config": "6fb413a62eaf37066edd13f8ad7918cc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "92773b150ef3ff21caccc8b99e4abc79",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "7385dac58188bc974b5a8dd254cb771e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f6a1044fee4c650ec173aa5f4ff2ba2d",
".git/logs/refs/heads/main": "82c7a0dac5623dc5bb225465f39fe73c",
".git/logs/refs/remotes/origin/main": "9079680514a4e95f4885a7efc5c4ddfe",
".git/objects/02/5ac4830f270f518a21e9c3ce7bed672733bb48": "5e4f60921909328259af9b579e88967a",
".git/objects/05/6e09fb701ced82f83d833a733e1a5685692d0a": "49b02f9bfbf378cdc7ad6114c0fde4e0",
".git/objects/05/deba987f7cc7114296110e852ee0e2536b6178": "d20d28f825b3388527bc6351dc2a4924",
".git/objects/08/b928f67fd4e5144bef19bac20f5d90dcc2637c": "67452652e84e92ad88e86fd60d4f7e4b",
".git/objects/0b/16cc361b0c547daec1c5c133d6e3293bb8a0fd": "92a69886f0cfc2a1337ca035ee0715ac",
".git/objects/0b/48cabb3320baaad1565cb678378ec415626e42": "07d833d1217f30773280f4811beb1d39",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/14/9f9a6fefa8443e965567a74062a1002a693eeb": "bda276fc3c4bfa297fad1e46e4bf98bf",
".git/objects/15/b1db696b1aeeb1905585cfff1aba3b75af13d0": "ed2acff7f379d48bf8575e34ca9bd75b",
".git/objects/18/4c0e0a7d37a7cbb73f74e391b722df8898878a": "ade4e51514e6d354ba15367e04eae167",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1e/84df687d3a6663f0f3354358a6cc18f2e788df": "f3fcdd3858b3444ed88953a9e1bdf969",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/24/e5114d0ef74bd1193f454e83c4f7755c8ded26": "a6101772e887c9993f55629ddc33af93",
".git/objects/2e/8ee79900209acbf08957a1f1edbc349a439404": "140ef2c9957ae0b49419265912293f32",
".git/objects/30/650ea34d1578252d522f132b7dd046d4e1a6e5": "1e52e099c335eace90dc2c4951e80e3f",
".git/objects/43/d64165fab23b9c6079a80ede9da78a090eae7f": "c960e63ca113f242aea230b625c06274",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/ef70bdd89e92257bac883543c1e86c235e3261": "8feb2967f68360ea7cf39e1e2604ae1b",
".git/objects/4d/84659851c61029707602244aab447a0dc2fedc": "2b1d019b34743dd0c1f34132d85d5d2b",
".git/objects/4f/0c027381818bc2a7060a34cdd3c75c10c01212": "5d810f068e4a0cca771e587b046817d5",
".git/objects/4f/fbc9ed37926d8a394541587db0fea4d62fee32": "f30ad421f2526933cda3d5d2d191599d",
".git/objects/53/c357d19ea0d62534ba398c7d3146af6f88a127": "52a2ebd131b69570259502485550939c",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/cd65aa03500add4c97c49128c9ee7979b4de8e": "44d431649220d2c3156a397f82fc864c",
".git/objects/5a/3a0118f675f701c124b2c403045824fcd075dd": "26b3156bc37159c4c3138feb85345c67",
".git/objects/61/19b4f1770511bfc17f9dccd001460902a3002a": "da465735bb45d9007343e8acdc1fa3b5",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/67a658ab84a67563884d2978aa0585e4cc3f7d": "16ee59bcacda1081452e69bee5149cc6",
".git/objects/6c/5b2bc9b2cef53ba02ca50a77d973edb73a33d3": "00e7c51253c3f932f4360e44184c2540",
".git/objects/6d/fc2d87bcb7d67ebb6d577d581b632d3deb2ccd": "90b86d329fba7a25e47ecf6d79f67409",
".git/objects/70/9e55d40b8499d3727a80318cf7608f4467accf": "683e6ebfde736edf6dc4876abdb44697",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/74/01aa3ad598c4c37f04b7180578fabb913ddbd6": "216ff95dc4d0b8b0eedbc18411ef5d69",
".git/objects/74/5c581e1d563821cfc2c71fbb852293a85ae608": "1417e59e1a3ef412cb54b6ac7886f063",
".git/objects/76/fad8c4281a8ad794954d4a7c636be9c74bd540": "18bad7310d6891d60af4522b7a9df97e",
".git/objects/7a/2e0ed268de9318e95012702334949a35010093": "3823934302e71793679284ddf136c76e",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/f62855f74d0ae0846ce92f388ca780ce19f47f": "65ad61548e0b8b6f70ef9450e00019e1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/5ebf494764656f32cdbe5c49526d812da94220": "fed65656718cbce250370bbe69e02435",
".git/objects/8d/2720a631cd4754bc6d712cfa5c4a35b47987df": "eabdf95a436694d50de3956a329b94bf",
".git/objects/90/70e8e88da73a58d142b4b96e406c99b2458be5": "e114ba57488f405086721fc45ff5fc3e",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/6535e07eb06c5abcd2cccb12ac408b279892b4": "1c8413aedf46d12af1f967367185ca63",
".git/objects/97/d4920287a478de9b3ea7ae273af04b3419e6c8": "35f7c9cdac7ae80d4d2f2cd9f9587e99",
".git/objects/99/603b1e5dd140a80ec87bf68f6c37014f22a42b": "8280da6344460c215b8bd76e82640d39",
".git/objects/99/e3e540b84a912de0f5d4d4daf55153b34aed63": "c31c4fcda0df27371cead32f898be3c6",
".git/objects/9b/088c0552f7b313da1370bbe08dea2240be27df": "5990466c3d1eb77b111211e74b4a4169",
".git/objects/9c/3cd322b2885960d30ac53f4653e2544ee1d964": "90ade10e248fcf42b0e28dc9702255a7",
".git/objects/a0/4e7dd5b8e1d82a22632becb78ac616401de21e": "6c5a81683f395264611d5405e183410d",
".git/objects/a1/f6658df0e04cebe6be2c3c66aa5c62f0f892c4": "a3d28a011a8cb62e62eb494681b07da5",
".git/objects/a3/335e54d52cc7f18c251e2386140a1dd39957bd": "6f243d08de21fab81e554ccfabe57537",
".git/objects/a7/cfd3795627041cd805d411a5edee05af41e12d": "5f62ca03ee1d506e4dcd72aafb442c38",
".git/objects/a9/f15a4d35f4325e25139fcfad0b7e3288644788": "43c06f4d69f749ccf2b60783d2e74e43",
".git/objects/ac/302bb964e0d6820d17e24cb665554d149c9a7b": "ca487d78fa57d53e2b2cf98ca16283ce",
".git/objects/af/855d05a535e252327714316e2d2a4bc6c3f657": "b3db4dfc02d4e39fcea89a3ce9832d75",
".git/objects/af/f906905526be8bae5595f1bee9912ce8b56b8d": "709d5cbd3a55a46af6b1af5eece855d8",
".git/objects/b3/e721303831ac5ecd45dab8de55a424a02ebfb6": "4565e00889b71417a703e13a059fc75b",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/793708e50ea5ca70ddeec4e7000091e0f4f9eb": "3da570dac5caf6fc38d42b588ce781f6",
".git/objects/b7/bfa37df8d4ad0d7b93a1d1e599f7913202358d": "748c1ad51f3bc521544f0365c7da6e72",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/b5e99ed5d838e00f369157b3ba6211583ee745": "50f3da4e201aae83f3e99276409eb9a8",
".git/objects/bd/1c27d58dc577123661705b6f2902fd2e9490e4": "ed441774355f8866f000a51d726488e0",
".git/objects/bd/312f297353cfc7dcb00ff7ad878bb4322ab08c": "4bd687c6a971297879303f9d69c80a5c",
".git/objects/bd/6f50fa9bcbe63404d21b9d195011a8cd3ddb56": "783209496f9e06927646aac4125fbf5a",
".git/objects/bf/3e1e717f23ef4ca58d386e18384a149d922866": "070de5a86b2248bb001cfa7eef367c9f",
".git/objects/c2/ccce0edcf3254dd273e61fd368a42e0dc4480c": "9aaccc8ca1580eee89a43cd828b6fab2",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cc/28a1ebb9fa1b50765a162e4c2af84290f9f9eb": "f3193d7cb1af4edfbf21b5b586b7da63",
".git/objects/cc/dac3eac52c2ed2463267035a12cba161f66c24": "d96fa89a42c5b62dfd79e479a411af60",
".git/objects/ce/b422398df7b798cae1f2264a44c755652b6ae1": "a20d604001117d92b660ca729b7759c6",
".git/objects/d0/503f0791a0adc491473c937002cdf500c0c5c2": "72d660e9d7b569856ef8c406d8ca5dc9",
".git/objects/d0/7f933c5843a27c5bb979aedacbba941c5ba2a7": "035653e5fb0153d061c0837147637604",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d3/e15f880d70e2f7b6518755168e49d3214a4488": "02d780aa54b50201e2b88a7dcfecf91e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/a08e913ecbe7f4370202731e06cff6673f693e": "2e3b081c798d785c3e7422a531e2af22",
".git/objects/d9/25ad00b22a66d778a35afb4bf2e6dae627b9f4": "d8263b207b4ae58d696993b3b18b1c5e",
".git/objects/da/a62ef87eae772b015ed09b130be6bafe6d06bf": "d7e6906628f77c2fdb06c7fbab946f35",
".git/objects/dc/8e9320202cc053f7d1d004c9f3eb6258434237": "61ec064d67fbad1606744433bf3f6899",
".git/objects/e4/d90c235c9e3e7c4f10ec5a219195824f03c6d8": "466fc76dcb3361df09ef4e4621fa8c1a",
".git/objects/e5/52646901d31df4d55f17b59aaec13179e962fe": "749d1228ffbd16b85a35d346caeaa236",
".git/objects/e5/9a4d3f3b03223bd56775b99f2a96a7e018c12d": "05fe8c39ce28a6538f37698da519303c",
".git/objects/e9/6c5a5bbb33cfed4551c650097e6e50dad5d28e": "ec0412c128ecaffbf8cb1a85180afad7",
".git/objects/ef/4fd579fdc5dd597d2052e107b4002c2908ae76": "bb431b7a436bdbc1daf2f2eac286f1ca",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/fdb28aabfab36e59439e24e360f997e571bbc9": "bac5c77da0a1ad47d5f497f7b305dca9",
".git/objects/f7/015a4a32425ef2727c54b55ddd7fca08908a7c": "b84a7d112c95241f73a54335c858c901",
".git/objects/f8/5d76424005b52eebcab970d62790f3cdb2f320": "94abc07a821c254919413e49a05691a9",
".git/objects/fa/568759824f669445bda257706979ed6f609d70": "5949fa0c1d38699c92c6617b9f8eccf0",
".git/objects/fb/eb4b441f5fb6e16d76e72ee73671e847083746": "ed42ad2be6baac947c37388f4a15aaca",
".git/objects/fc/8489a4f8f93446ccce378169f0fd99031b9384": "853b41aae82461c81043ff1f486e3517",
".git/objects/fe/710100ec4fe4a57eecb8a5d73739e3457ff3b9": "ed9f821f1e0bd87dc28c85a8265f3f29",
".git/objects/fe/f519e57221869995b58722514be3dc60b9293e": "0600c35639b32b2872e09295abaf1846",
".git/refs/heads/main": "22ae493c2b89055ea6198525ffd19504",
".git/refs/remotes/origin/main": "22ae493c2b89055ea6198525ffd19504",
"assets/AssetManifest.bin": "e33c360aafc396b8ba84d08bb150327a",
"assets/AssetManifest.bin.json": "f0e7c8b98b32b43da50731efb289d197",
"assets/AssetManifest.json": "755a9b691860130a939f22927d8a6584",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4ff455e20aa262694c077899dbccd52a",
"assets/images/brio.webp": "88d35afbe03218d57bde37d3405eb0e0",
"assets/images/Car.png": "c277a3c7081977aef1b0749e5f16f442",
"assets/images/Logo.png": "0a2bdefc7e908113b7d70e011157857c",
"assets/images/warning%25201%2520(1).png": "fc8a64571880bfb442f316537d7ba28a",
"assets/images/warning%25201.png": "e345ba22fbe5abf44af9213f4bab32d2",
"assets/NOTICES": "9f76f8e2d416dee5f0424d6d4ec62096",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/timezone/data/latest_all.tzf": "a3a6cb5d912b5375926e5b027f91cb00",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "c8c2974312aaa28d9c86c4ba15fbde5b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "17e075b0ba6678b62e9972a53415a775",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "9ea69353cd2ee3a64a39d0a47ed5574e",
"icons/apple-touch-icon.png": "845006b1e8b3bc5687517bcc4eb45d00",
"icons/icon-192.png": "eb95b5a4464b75b53d53366631d314a9",
"icons/icon-512.png": "3c7833e7da1f17bf195c57d5e4de9740",
"icons/icon-maskable-192.png": "6265e8ebc86b7e8524ae26359d14bc34",
"icons/icon-maskable-512.png": "27085bd20034d8c651ab7343d606cb83",
"index.html": "a71fc514cea5eaf8391b875df2c3f1b1",
"/": "a71fc514cea5eaf8391b875df2c3f1b1",
"main.dart.js": "e76ae59981f524d432dd5a3d454d800a",
"manifest.json": "e2c8287cf2590f533c28bb6d001ba8ba",
"version.json": "c08ec8f20974bd60672d0cb8f395a099"};
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

if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,n,a)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const r={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return i;case"module":return r;default:return e(s)}}))).then((e=>{const s=a(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/PiWLisgIuuIC6VlhYi4IE/_buildManifest.js",revision:"PiWLisgIuuIC6VlhYi4IE"},{url:"/_next/static/PiWLisgIuuIC6VlhYi4IE/_ssgManifest.js",revision:"PiWLisgIuuIC6VlhYi4IE"},{url:"/_next/static/chunks/462-dc19632b2a3de64093a8.js",revision:"PiWLisgIuuIC6VlhYi4IE"},{url:"/_next/static/chunks/485-77515a5132684eef7cc1.js",revision:"PiWLisgIuuIC6VlhYi4IE"},{url:"/_next/static/chunks/802-0af9c7983577f481806a.js",revision:"PiWLisgIuuIC6VlhYi4IE"},{url:"/_next/static/chunks/825-f6f7356ed5e25c821587.js",revision:"PiWLisgIuuIC6VlhYi4IE"},{url:"/_next/static/chunks/949-0a31f68bf9bbdb47be41.js",revision:"PiWLisgIuuIC6VlhYi4IE"},{url:"/_next/static/chunks/9b9493a3-03ddf3645a716a67fdf4.js",revision:"PiWLisgIuuIC6VlhYi4IE"},{url:"/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"PiWLisgIuuIC6VlhYi4IE"},{url:"/_next/static/chunks/main-5276a51915fa1c9592b1.js",revision:"PiWLisgIuuIC6VlhYi4IE"},{url:"/_next/static/chunks/pages/_app-cc78229a4cd92657cd6b.js",revision:"PiWLisgIuuIC6VlhYi4IE"},{url:"/_next/static/chunks/pages/_error-9faf4177fb4e528b4124.js",revision:"PiWLisgIuuIC6VlhYi4IE"},{url:"/_next/static/chunks/pages/app-8413c8cb1242c90430c7.js",revision:"PiWLisgIuuIC6VlhYi4IE"},{url:"/_next/static/chunks/pages/incomplete-59e845f8b95aef5c0469.js",revision:"PiWLisgIuuIC6VlhYi4IE"},{url:"/_next/static/chunks/pages/index-e02f499ea70a385c7d47.js",revision:"PiWLisgIuuIC6VlhYi4IE"},{url:"/_next/static/chunks/pages/p/%5Buser_username%5D-7cd98214ba1247a1899c.js",revision:"PiWLisgIuuIC6VlhYi4IE"},{url:"/_next/static/chunks/pages/sign-in-c17c744e2eff3e5beb15.js",revision:"PiWLisgIuuIC6VlhYi4IE"},{url:"/_next/static/chunks/pages/sign-up-57e46aa3a967f146e789.js",revision:"PiWLisgIuuIC6VlhYi4IE"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"PiWLisgIuuIC6VlhYi4IE"},{url:"/_next/static/chunks/webpack-715970c8028b8d8e1f64.js",revision:"PiWLisgIuuIC6VlhYi4IE"},{url:"/_next/static/css/a008a2d54c7caf68da0c.css",revision:"PiWLisgIuuIC6VlhYi4IE"},{url:"/favicon.ico",revision:"9dfc35ba2130726fa3e1e48dd97fe9f0"},{url:"/icon.png",revision:"495fc3a7f4a0df35c4497f9111f8ecf1"},{url:"/icons/icon-128x128.png",revision:"bb0ca1944aab5cd553017fe246a43f5d"},{url:"/icons/icon-144x144.png",revision:"b08004c71f7068e18cc12a23b302f47a"},{url:"/icons/icon-152x152.png",revision:"b04141bedcaa0db400be4ce237248a65"},{url:"/icons/icon-192x192.png",revision:"f9667a96b46c3a4f2847c1a8641848ac"},{url:"/icons/icon-384x384.png",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/icons/icon-512x512.png",revision:"7252a12809f8e9db181b58bade14576d"},{url:"/icons/icon-72x72.png",revision:"f0067a9a1d02f8b9702d2ecad45455e1"},{url:"/icons/icon-96x96.png",revision:"33cf274546b756fdfc6c40f28edfc264"},{url:"/manifest.json",revision:"cf6cc1e3ca8cb0601483728d0ef595fe"},{url:"/robots.txt",revision:"ac721ddcaee8cb61a8a9942da0e868d6"},{url:"/sitemap.xml",revision:"492b9c1808a40f3c838754cc35bf4086"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600,purgeOnQuotaError:!0})]}),"GET")}));

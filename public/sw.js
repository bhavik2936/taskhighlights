if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,c,n)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const a={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return i;case"module":return a;default:return e(s)}}))).then((e=>{const s=n(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-21b21c9a"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/181.6153a74af7e8960876bc.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/218.d6dcd594b6248219ff96.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/228-7e8086e09dc92bae078f.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/314-89a56ef51c171fde95cc.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/334.d6c28114e9639fb912ad.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/337.b3586e59d62013ec28a8.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/385.524528e62610a684289c.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/49-94f0e517f6465963fea2.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/509.e3da4124e28af7e11a8f.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/541.ccd322c8ed00f861c6e6.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/61-6e2d1835810334eddc55.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/655-8808a8896d963795d61c.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/679-ac72f68231d37b36c359.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/695.0e664c13e97373ae3272.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/775-13ac430c3d87736f96e4.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/781.d7f666338a596ee379a2.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/785.b19f66a4157a92fbddc7.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/802-d6bc5a60b90472db28c9.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/973-9f645efdc72220a095e1.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/9b9493a3-a6b9ab25fc9ddd7f146a.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/framework-54a34080d01b84667903.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/main-c997a785adc6b00b6289.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/pages/_app-33b350d69147546ec995.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/pages/app-4c96d5c3a09973591104.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/pages/archived-5fda3832e0ec3a4e4f43.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/pages/habits-8bff44d5974b09d35f0e.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/pages/incomplete-bbc9ed83ad6d07cb3594.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/pages/index-7557174cc13c22b19b68.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/pages/log-in-0838fee60cedd8f119fe.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/pages/p/%5Btitle%5D-338a3e2f3fefe69f2aaa.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/pages/sign-up-60d564bf56af742f92e9.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/pages/templates-46f11311f98af23688cf.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/pages/u/%5Buser_username%5D-64cbcd37aa0a68edb7c1.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/chunks/webpack-bcc13596c930b83ef516.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/css/6e889972310bbbcb4802.css",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/e7vxlHG5RcTY5oMi4zV1j/_buildManifest.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/_next/static/e7vxlHG5RcTY5oMi4zV1j/_ssgManifest.js",revision:"e7vxlHG5RcTY5oMi4zV1j"},{url:"/favicon.ico",revision:"9dfc35ba2130726fa3e1e48dd97fe9f0"},{url:"/icon.png",revision:"495fc3a7f4a0df35c4497f9111f8ecf1"},{url:"/icons/icon-128x128.png",revision:"bb0ca1944aab5cd553017fe246a43f5d"},{url:"/icons/icon-144x144.png",revision:"b08004c71f7068e18cc12a23b302f47a"},{url:"/icons/icon-152x152.png",revision:"b04141bedcaa0db400be4ce237248a65"},{url:"/icons/icon-192x192.png",revision:"f9667a96b46c3a4f2847c1a8641848ac"},{url:"/icons/icon-384x384.png",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/icons/icon-512x512.png",revision:"7252a12809f8e9db181b58bade14576d"},{url:"/icons/icon-72x72.png",revision:"f0067a9a1d02f8b9702d2ecad45455e1"},{url:"/icons/icon-96x96.png",revision:"33cf274546b756fdfc6c40f28edfc264"},{url:"/images/desktop_app-page.png",revision:"f5959fe81d6c03c380148ec7d2730a42"},{url:"/images/icon.jpg",revision:"fbe902a436f9eb03fe35f261c7d997dc"},{url:"/images/tasks-card_app-page.png",revision:"217152c1db4f037de909c618349554b9"},{url:"/manifest.json",revision:"94f9506862b9985cefff87803b34a561"},{url:"/robots.txt",revision:"ac721ddcaee8cb61a8a9942da0e868d6"},{url:"/sitemap.xml",revision:"f545878174c2a0c456d039ac73c6cf18"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const o=e=>n(e,i),r={module:{uri:i},exports:c,require:o};s[i]=Promise.all(a.map((e=>r[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-5afaf374"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Casgs0T0jGQGIWvhDyOqz/_buildManifest.js",revision:"Casgs0T0jGQGIWvhDyOqz"},{url:"/_next/static/Casgs0T0jGQGIWvhDyOqz/_middlewareManifest.js",revision:"Casgs0T0jGQGIWvhDyOqz"},{url:"/_next/static/Casgs0T0jGQGIWvhDyOqz/_ssgManifest.js",revision:"Casgs0T0jGQGIWvhDyOqz"},{url:"/_next/static/chunks/252f366e-c37c62a5e28cc2cd.js",revision:"Casgs0T0jGQGIWvhDyOqz"},{url:"/_next/static/chunks/670-311ac5ac1a49aba0.js",revision:"Casgs0T0jGQGIWvhDyOqz"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"Casgs0T0jGQGIWvhDyOqz"},{url:"/_next/static/chunks/main-162f22c83e474964.js",revision:"Casgs0T0jGQGIWvhDyOqz"},{url:"/_next/static/chunks/pages/_app-75827c95cf05ded1.js",revision:"Casgs0T0jGQGIWvhDyOqz"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"Casgs0T0jGQGIWvhDyOqz"},{url:"/_next/static/chunks/pages/about-eecbbd2b5c449ff9.js",revision:"Casgs0T0jGQGIWvhDyOqz"},{url:"/_next/static/chunks/pages/index-95a975c7cde4b9ce.js",revision:"Casgs0T0jGQGIWvhDyOqz"},{url:"/_next/static/chunks/pages/posts/%5Bslug%5D-6d27749ab4530f21.js",revision:"Casgs0T0jGQGIWvhDyOqz"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"Casgs0T0jGQGIWvhDyOqz"},{url:"/_next/static/chunks/webpack-5752944655d749a0.js",revision:"Casgs0T0jGQGIWvhDyOqz"},{url:"/assets/UI/arrow-alt-circle-up-solid.svg",revision:"52844aacff8f183a90313130dddab726"},{url:"/assets/UI/moon.svg",revision:"25e91ac679bb999002e3d2b2f422d0b4"},{url:"/assets/UI/sun.svg",revision:"fe4053b9ad1356c378185ae6c36b2845"},{url:"/assets/authors/dastasoft.jpeg",revision:"c16bf1152a4300d661688b54e38ae270"},{url:"/assets/dev-brands.svg",revision:"3268c9479655067b8faf48cb83fa8555"},{url:"/assets/envelope-solid.svg",revision:"82189696539164bc0b0e271a3bcac397"},{url:"/assets/github-brands.svg",revision:"5bff33aa78b1ae1bf7b02ec3e643bb84"},{url:"/assets/linkedin-brands.svg",revision:"ff0036d1a00f465d93f54a38228b4fba"},{url:"/assets/posts/content/basic-circle.jpg",revision:"0aa0b3362672b4a25bfda3585251c9ae"},{url:"/assets/posts/content/circle-full.gif",revision:"15202485b3aea98e8ce35e615a7d42d6"},{url:"/assets/posts/content/circle-moved.jpg",revision:"07099e7265c1350f9eed2f17d2809a20"},{url:"/assets/posts/content/circle-progress-bar-number.gif",revision:"bcbc5b336192ce2114e028d8530ddedc"},{url:"/assets/posts/content/circle-text.jpg",revision:"208f143ff8d43ac19a60929a9f3ed035"},{url:"/assets/posts/content/fusuma/slide-default.png",revision:"13fc15d701d5bf0da21f25fcda28a772"},{url:"/assets/posts/content/fusuma/social-networks.png",revision:"4b16fdbee25e8d0d8b19839767736a2d"},{url:"/assets/posts/content/fusuma/speaker-notes.png",revision:"aca44505e835fd7d4d645618b98bef59"},{url:"/assets/posts/content/mongodb/embeed_data.png",revision:"bfc4666e66e415a833c7d6e9f13fdf61"},{url:"/assets/posts/content/mongodb/mongo_db_plugin_new_connection.png",revision:"911f080c3cc4e9510a82ad044cdb93d1"},{url:"/assets/posts/content/mongodb/mongodb_compass.png",revision:"3c121b0542f78fb58cfc8b6b1d30da13"},{url:"/assets/posts/content/mongodb/mongoose_scheme_typescript.png",revision:"f32ad18dd5e23ca905cf360ca230ab09"},{url:"/assets/posts/content/mongodb/relation_with_id.png",revision:"76a234ec3834666edeeb84795dc9e09e"},{url:"/assets/posts/content/naruto-running.gif",revision:"cdd97372f67962d3c6b39e31b3aa05b0"},{url:"/assets/posts/content/node-express/middlewares.png",revision:"a3cb12237e2f06309225cc1d8d84c7bd"},{url:"/assets/posts/content/node-express/mvc-diagram.png",revision:"68459fc53099daf3d5db5dfedb041dd0"},{url:"/assets/posts/content/node-express/node-responses.png",revision:"96f605d507748113d88d8097a782648a"},{url:"/assets/posts/content/node-express/node.png",revision:"09c0f04cab64049994a053acd02d813c"},{url:"/assets/posts/content/node-express/postman-endpoints.jpg",revision:"a0f038047e4418050efb79a04a6ed5ee"},{url:"/assets/posts/content/node-express/postman-endpoints2.png",revision:"d7e8ec15b5b035efd21a253320137227"},{url:"/assets/posts/content/node-express/postman-endpoints3.png",revision:"fcf56337ec46f0e22419fa4ba21eefeb"},{url:"/assets/posts/content/node-express/postman-environment-variables.jpg",revision:"ef81a1ee5a487a5cdc296b70c58dbb34"},{url:"/assets/posts/content/node-express/postman-examples.png",revision:"46957653774251a005315254265f4964"},{url:"/assets/posts/content/node-express/state-of-js.png",revision:"11929665af85a5e808f1650174b8a83f"},{url:"/assets/posts/content/redux-toolkit/actions.png",revision:"147f8dbeedf860588e4d2edfa3a24ef4"},{url:"/assets/posts/content/redux-toolkit/cache.gif",revision:"e8012b20d4cc448870a59d37476fcf6b"},{url:"/assets/posts/content/redux-toolkit/magic.gif",revision:"9a021a6cd72cfaab539f3b1fef648ed9"},{url:"/assets/posts/content/redux-toolkit/redux-dev-tools.png",revision:"969d74145f9ad20a8d1c26966b486f3e"},{url:"/assets/posts/content/redux-toolkit/redux-everywhere.jpg",revision:"2ce4d2bc3577d7be4ead4e5244524e91"},{url:"/assets/posts/content/redux-toolkit/where-state.png",revision:"51272fc5981384efe88999fff590e85e"},{url:"/assets/posts/content/typescript/airbnb.jpg",revision:"9d38e6f62f9c1a565f2f0d0a757efb27"},{url:"/assets/posts/content/typescript/shopping-list.png",revision:"ff565a70bd341a09e2d31564c7d13ca6"},{url:"/assets/posts/content/typescript/side-by-side.png",revision:"448cbae66a8449c4c3a49b56c97fbc33"},{url:"/assets/posts/content/typescript/syntaxsugar.jpeg",revision:"25789c22e610d696e951ed4978940bfb"},{url:"/assets/posts/preview/animated-circlebar.jpg",revision:"8067bb99130c6cbbffe5edc1d5da0080"},{url:"/assets/posts/preview/chakraui-react.webp",revision:"1c465c3167d081b2d306a16367c86308"},{url:"/assets/posts/preview/crud-mongodb.webp",revision:"c3989b76d93fa8caea811db8e36b2bdf"},{url:"/assets/posts/preview/fusuma.webp",revision:"1520f60ac41e47e32a920b2e63a33be8"},{url:"/assets/posts/preview/nextjs-blog.jpg",revision:"8431947753900e02b2d825e731c785a6"},{url:"/assets/posts/preview/node-express.webp",revision:"0b79f895c208d7d968816aba1a854b3d"},{url:"/assets/posts/preview/redux-toolkit.webp",revision:"fd69c48a6c2c6c92f9d0613b81a48b58"},{url:"/assets/posts/preview/simple-react-boilerplate.png",revision:"01cdf256f12834c8223d3ab890fad6f2"},{url:"/assets/posts/preview/styling-in-react.png",revision:"7b9d935076b44cb551ddff20813d6841"},{url:"/assets/posts/preview/typescript-react.webp",revision:"7530b53c19b4ae49ed0d598cde3f863c"},{url:"/assets/reddit-brands.svg",revision:"b7a0ebcb592097716fbc5cee503ad793"},{url:"/assets/twitter-brands.svg",revision:"6620c8ae2cac90067a9aa78339bb808d"},{url:"/favicon.ico",revision:"f0536954522c15caa5792322cb0bbf44"},{url:"/icons/maskable_icon.png",revision:"8e4c0b928a59bc213c79e9234ff39d69"},{url:"/icons/maskable_icon_x128.png",revision:"b93c4c2da66b2b9ca4ad35961a6fe17c"},{url:"/icons/maskable_icon_x192.png",revision:"52e548af5a5e02e390274b5360bf28be"},{url:"/icons/maskable_icon_x384.png",revision:"714dec57401e11bdcb3bef48a118a719"},{url:"/icons/maskable_icon_x48.png",revision:"1d3fcd66086b558778fe608cdc910847"},{url:"/icons/maskable_icon_x512.png",revision:"27462e2071519f1555f8674470003dca"},{url:"/icons/maskable_icon_x72.png",revision:"0d2c79040f34fdc9f2869f009c15695c"},{url:"/icons/maskable_icon_x96.png",revision:"cdaca23b2a0b111a2dff35aa5606c2b6"},{url:"/manifest.json",revision:"4d1b74b5c031b437f53f0306564d32d9"},{url:"/robots.txt",revision:"b73fd95315d157fbadc142e47ac0473c"},{url:"/rss/atom.xml",revision:"267a75925abdf7ba963cf8c31dff3cdb"},{url:"/rss/feed.json",revision:"1f0f0a7686edef9575fece2b8e08fc45"},{url:"/rss/feed.xml",revision:"066d2cb608d2c3de95c25f6cb50d5d6c"},{url:"/screenshots/blog1.png",revision:"6bbd76fd3a8780c7844628de449f4025"},{url:"/screenshots/blog2.png",revision:"329c8b3a8651ac52b56019498d270b14"},{url:"/sitemap.xml",revision:"236e2abebd83ec23daf327bf150d4403"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

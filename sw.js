if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let d={};const a=e=>i(e,c),f={module:{uri:c},exports:d,require:a};s[c]=Promise.all(n.map((e=>f[e]||a(e)))).then((e=>(r(...e),d)))}}define(["./workbox-041f3694"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.js",revision:"504f63f0d75b37a49a309a2238530700"},{url:"assets/add Icon.png",revision:"49cead06ea2b7e45418e44fe3eab975f"},{url:"assets/edit icon.png",revision:"fcda5d1dafefe27f1210b0fa13f2b2c4"},{url:"assets/empty-trash icon.png",revision:"d0a9b8ceb18658632018e204ddbe80e2"},{url:"assets/icon-192.png",revision:"45f0e9513ee33bdb3ff8879f7c2fc268"},{url:"assets/icon-384.png",revision:"3cf251a83522d13e74d40f753556f2a0"},{url:"assets/icon-512.png",revision:"69cea7d072d7e42f2bad8b6b1a562b09"},{url:"assets/new update icon.png",revision:"f1b98326c1d1ffbc4dda16e156a7ba16"},{url:"assets/undraw_empty_cart_co35.svg",revision:"04ad04121a26d758dfef3c1c5e780316"},{url:"dexie.min.js",revision:"1e4a91f5cf779986845a7281859d8355"},{url:"index.css",revision:"d5f007fc19de675bb7cba704134d0ccb"},{url:"index.html",revision:"e72c2a0c161f9c5445dd77daa1830074"},{url:"manifest.json",revision:"537fac922b7f38c6d84c8255d018af12"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map

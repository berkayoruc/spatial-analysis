import"./modulepreload-polyfill-3cfb730f.js";const s=new URL(window.location.href);s.searchParams.set("kim","ihsan");window.history.pushState(null,"",s.toString());const m=window!==window.parent;var i,c,a,l;if(!m)document.getElementById("btn-buffer-simplify").addEventListener("click",n=>{window.location.href="./simplify/"}),document.getElementById("btn-draw-circle").addEventListener("click",n=>{window.location.href="./draw-circle/"}),document.getElementById("btn-custom-bbox").addEventListener("click",n=>{window.location.href="./custom-bbox/"}),document.getElementById("btn-static-map").addEventListener("click",n=>{window.location.href="./static-map/"}),document.getElementById("btn-geojson-to-shapefile").addEventListener("click",n=>{window.location.href="./geojson-to-shapefile/"}),document.getElementById("btn-interaction-limit").addEventListener("click",n=>{window.location.href="./interaction-limit/"});else{const t=document.querySelector("body"),o=(c=(i=window==null?void 0:window.parent)==null?void 0:i.document)==null?void 0:c.getElementsByName("alihan-yeter");if(o.length&&console.log(o[0].dataset.alihanYeter,"alihan yeter"),(l=(a=window==null?void 0:window.parent)==null?void 0:a.location)!=null&&l.href.includes("berkay"))document.getElementById("btn-interaction-limit").addEventListener("click",w=>{window.location.href="./interaction-limit/"});else{const e=document.createElement("img");e.src="./yak.jpeg",t.innerHTML="",t.appendChild(e)}console.log("bu ne alihan","document.write(<img src=./yak.jpeg />);")}console.log("window origin",window.location.origin);console.log("window origin",window.location.href);console.log("parent",parent);console.log("window",window);console.log("parent === window",parent===window);console.log("document.location.ancestorOrigins[0]",document.location.ancestorOrigins[0]);var r,d;const f=window.location.href===((d=(r=window==null?void 0:window.parent)==null?void 0:r.location)==null?void 0:d.href);console.log("window href === window parent href",f);

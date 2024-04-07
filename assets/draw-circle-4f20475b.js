import"./modulepreload-polyfill-3cfb730f.js";import{d,r as k,l as w,p as I,b,c as x,m as L}from"./index-4df36c28.js";import{b as f}from"./index-89eba6c8.js";function D(e,t,o){o===void 0&&(o={});var a=f(e),i=f(t),s=d(i[1]-a[1]),n=d(i[0]-a[0]),c=d(a[1]),l=d(i[1]),u=Math.pow(Math.sin(s/2),2)+Math.pow(Math.sin(n/2),2)*Math.cos(c)*Math.cos(l);return k(2*Math.atan2(Math.sqrt(u),Math.sqrt(1-u)),o.units)}function p(e,t,o,a){a===void 0&&(a={});var i=f(e),s=d(i[0]),n=d(i[1]),c=d(o),l=w(t,a.units),u=Math.asin(Math.sin(n)*Math.cos(l)+Math.cos(n)*Math.sin(l)*Math.cos(c)),v=s+Math.atan2(Math.sin(c)*Math.sin(l)*Math.cos(n),Math.cos(l)-Math.sin(n)*Math.sin(u)),h=b(v),S=b(u);return I([h,S],a.properties)}function B(e,t,o){o===void 0&&(o={});for(var a=o.steps||64,i=o.properties?o.properties:!Array.isArray(e)&&e.type==="Feature"&&e.properties?e.properties:{},s=[],n=0;n<a;n++)s.push(p(e,t,n*-360/a,o).geometry.coordinates);return s.push(s[0]),x([s],i)}const F={radius:4,minRadius:1,maxRadius:10},g=()=>F.radius,R=e=>F.radius=e,m=({center:e,steps:t})=>B(e,g(),{steps:t}),y=e=>{const t=e.target,{lat:o,lng:a}=t.getCenter(),{lat:i,lng:s}=e.lngLat;t.getCanvas().style.cursor="grabbing";let n=D([s,o],[a,o]),c=s;n<1&&(c=p([a,o],1,90,{units:"kilometers"}).geometry.coordinates[0],n=1),n>10&&(c=p([a,o],10,90,{units:"kilometers"}).geometry.coordinates[0],n=10);const l=document.getElementById("label-radius"),u=t.getSource("point-src"),v=t.getSource("circle-src");u.setData({type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[c,u._data.features[0].geometry.coordinates[1]]}}]}),l.innerHTML=`Radius: ${n.toFixed(2)} km`;const h=document.getElementById("input-radius");h.value=n,R(n),v.setData({type:"FeatureCollection",features:[m({center:[a,o],steps:100})]})},C=e=>{const t=e.target;e.lngLat,t.getCanvas().style.cursor="",t.off("mousemove",y),t.off("touchmove",y)},E=""+new URL("chevron-right-double-b7c852f4.svg",import.meta.url).href,T=document.getElementById("btn-back");T.addEventListener("click",()=>{window.location.href="../index.html"});L.accessToken="pk.eyJ1Ijoib3J1Y2JlIiwiYSI6ImNsbTZuZGxrZjBoN3czamxnM2V6aHBiZGEifQ.Fami0mGh65buxFjfJ0Ppjg";const r=new L.Map({center:[29,41.015137],container:"mapContainer",style:"mapbox://styles/mapbox/streets-v12",zoom:11}),j=document.getElementById("label-radius");j.innerHTML=`Radius: ${g().toFixed(2)} km`;let M=new Image(48,32);M.onload=()=>r.addImage("radius-change-icon",M);M.src=E;const A=document.getElementById("input-radius");r.on("load",()=>{r.addSource("point-src",{type:"geojson",data:{type:"FeatureCollection",features:[p([29,41.015137],g(),90,{units:"kilometers"})]}}),r.addSource("circle-src",{type:"geojson",data:{type:"FeatureCollection",features:[m({center:[29,41.015137],steps:100})]}}),r.addLayer({id:"circle-lyr",type:"fill",source:"circle-src",paint:{"fill-color":"#369096","fill-opacity":.25}}),r.addLayer({id:"circle-outline-lyr",type:"line",source:"circle-src",paint:{"line-color":"#3DA0A8","line-width":2}}),r.addLayer({id:"point-lyr",source:"point-src",type:"symbol",layout:{"icon-image":"radius-change-icon","icon-size":1,"icon-allow-overlap":!0}}),r.on("mouseenter","point-lyr",()=>{r.getCanvas().style.cursor="move"}),r.on("mouseleave","point-lyr",()=>{r.getCanvas().style.cursor=""}),r.on("mousedown","point-lyr",e=>{e.preventDefault(),r.getCanvas().style.cursor="grab",r.on("mousemove",y),r.once("mouseup",C)}),r.on("touchstart","point-lyr",e=>{e.points.length===1&&(e.preventDefault(),r.on("touchmove",y),r.once("touchend",C))}),r.on("move",e=>{const t=e.target,{lat:o,lng:a}=t.getCenter(),i=t.getSource("point-src"),s=t.getSource("circle-src");i.setData({type:"FeatureCollection",features:[p([a,o],g(),90,{units:"kilometers"})]}),s.setData({type:"FeatureCollection",features:[m({center:[a,o],steps:100})]})}),A.addEventListener("input",e=>{const t=parseFloat(e.target.value);R(t);const o=document.getElementById("label-radius");o.innerHTML=`Radius: ${t.toFixed(2)} km`;const a=r.getCenter(),i=r.getSource("point-src"),s=r.getSource("circle-src");i.setData({type:"FeatureCollection",features:[p([a.lng,a.lat],t,90,{units:"kilometers"})]}),s.setData({type:"FeatureCollection",features:[m({center:[a.lng,a.lat],steps:100})]})})});

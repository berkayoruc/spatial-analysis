import"./modulepreload-polyfill-3cfb730f.js";import{c as g,d as i,r as L,l as F,p as j,h as y,j as S,m}from"./index-41b36d62.js";function x(e,o,t){t===void 0&&(t={});var a=g(e),c=g(o),n=i(c[1]-a[1]),s=i(c[0]-a[0]),l=i(a[1]),u=i(c[1]),p=Math.pow(Math.sin(n/2),2)+Math.pow(Math.sin(s/2),2)*Math.cos(l)*Math.cos(u);return L(2*Math.atan2(Math.sqrt(p),Math.sqrt(1-p)),t.units)}function h(e,o,t,a){a===void 0&&(a={});var c=g(e),n=i(c[0]),s=i(c[1]),l=i(t),u=F(o,a.units),p=Math.asin(Math.sin(s)*Math.cos(u)+Math.cos(s)*Math.sin(u)*Math.cos(l)),f=n+Math.atan2(Math.sin(l)*Math.sin(u)*Math.cos(s),Math.cos(u)-Math.sin(s)*Math.sin(p)),C=y(f),b=y(p);return j([C,b],a.properties)}function P(e,o,t){t===void 0&&(t={});for(var a=t.steps||64,c=t.properties?t.properties:!Array.isArray(e)&&e.type==="Feature"&&e.properties?e.properties:{},n=[],s=0;s<a;s++)n.push(h(e,o,s*-360/a,t).geometry.coordinates);return n.push(n[0]),S([n],c)}const M=({center:e,radius:o,steps:t})=>{const a=P(e,o,{steps:t});return console.log(a),a},d=e=>{const o=e.target,{lat:t,lng:a}=o.getCenter();console.log(t,a);const{lat:c,lng:n}=e.lngLat,s=o.getSource("point-src"),l=o.getSource("circle-src");o.getCanvas().style.cursor="grabbing",s.setData({type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[n,s._data.features[0].geometry.coordinates[1]]}}]}),l.setData({type:"FeatureCollection",features:[M({center:[a,t],radius:x([n,t],[a,t]),steps:100})]})},v=e=>{const o=e.target;e.lngLat,o.getCanvas().style.cursor="",o.off("mousemove",d),o.off("touchmove",d)};m.accessToken="pk.eyJ1Ijoib3J1Y2JlIiwiYSI6ImNsbTZuZGxrZjBoN3czamxnM2V6aHBiZGEifQ.Fami0mGh65buxFjfJ0Ppjg";const r=new m.Map({center:[29,41.015137],container:"mapContainer",style:"mapbox://styles/mapbox/streets-v12",zoom:10});r.on("load",()=>{r.addSource("point-src",{type:"geojson",data:{type:"FeatureCollection",features:[h([29,41.015137],10,90,{units:"kilometers"})]}}),r.addSource("circle-src",{type:"geojson",data:{type:"FeatureCollection",features:[M({center:[29,41.015137],radius:10,steps:100})]}}),r.addLayer({id:"circle-lyr",type:"fill",source:"circle-src",paint:{"fill-color":"red"}}),r.addLayer({id:"point-lyr",type:"circle",source:"point-src",paint:{"circle-radius":25,"circle-color":"#ccc"}}),r.on("mouseenter","point-lyr",()=>{r.setPaintProperty("point-lyr","circle-color","#3bb2d0"),r.getCanvas().style.cursor="move"}),r.on("mouseleave","point-lyr",()=>{r.setPaintProperty("point-lyr","circle-color","purple"),r.getCanvas().style.cursor=""}),r.on("mousedown","point-lyr",e=>{e.preventDefault(),r.getCanvas().style.cursor="grab",r.on("mousemove",d),r.once("mouseup",v)}),r.on("touchstart","point-lyr",e=>{e.points.length===1&&(e.preventDefault(),r.on("touchmove",d),r.once("touchend",v))})});

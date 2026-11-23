/* ====== EDITA AQUÍ TUS DATOS ====== */
var NEGOCIO="CAFE POLACO BRAND INC";
var WHATSAPP="525621754412"; // lada país + número, sin espacios ni +
var MENU=[
 {cat:"Frappés y bebidas frías",items:[
  {n:"Frappé de moka",d:"Café, chocolate y crema batida.",t:"600 ml",p:"$50",x:"Sabores del día: consulta",img:"img/frappe-moka.jpg"},
  {n:"Frappé de vainilla",d:"Cremoso, suave y dulce.",t:"600ml",p:"$50",img:"img/frappe-vainilla.jpg"},
  {n:"Limonada o té frío",d:"Refrescante, sabor del día.",t:"600 ml",p:"$50",img:"img/limonada.jpg"}]},
 {cat:"Café y bebidas calientes",items:[
  {n:"Café americano",d:"Café recién preparado.",t:"500 ml",p:"$40",img:"img/americano.jpg"},
  {n:"Capuchino",d:"Espresso con leche espumada.",t:"500 ml",p:"$40",img:"img/capuchino.jpg"},
  {n:"Chocolate caliente",d:"Espeso y reconfortante.",t:"500 ml",p:"$50",img:"img/chocolate.jpg"}]},
 {cat:"Cupcakes y panqués",items:[
  {n:"Cupcake decorado",d:"Esponjoso,y suave.",t:"Pieza o caja de 6",p:"$90",x:"Sabores del día: consulta",img:"img/cupcake.jpg"},
  {n:"Panqué de naranja",d:"Tradicional y suave.",t:"Por pieza ",p:"$15",img:"img/panque-naranja.jpg"},
  {n:"Panqué de elote",d:"Dulce y húmedo.",t:"Por pieza",p:"$15",img:"img/panque-elote.jpg"}]},
 {cat:"Otros productos",items:[
  {n:"Galletas con chispas de chocolate",d:"Hechas en casa.",t:"Bolsa de 10 galletas",p:"$100",img:"img/galletas.jpg"},
  {n:"Postre del día",d:"Pregunta por el de hoy.",t:"Rebanada",p:"$--",x:"Sujeto a disponibilidad",img:"img/postre.jpg"}]}
]
/* ==================================== */

function wa(msg){return "https://wa.me/525621754412?text="+encodeURIComponent(msg)}
document.querySelectorAll("[data-nombre]").forEach(function(e){e.textContent=NEGOCIO});
document.querySelectorAll("a.wa").forEach(function(a){a.href=wa("Hola, quiero hacer un pedido");a.target="_blank";a.rel="noopener"});
document.getElementById("y").textContent=new Date().getFullYear();

var cur=0,tabs=document.getElementById("tabs"),grid=document.getElementById("grid");
function draw(){
 tabs.innerHTML="";
 MENU.forEach(function(m,i){var b=document.createElement("button");b.textContent=m.cat;b.className=i==cur?"on":"";b.onclick=function(){cur=i;draw()};tabs.appendChild(b)});
 grid.innerHTML=MENU[cur].items.map(function(p){
  return '<article class="item"><div class="ph"><img src="'+p.img+'" alt="'+p.n+'" loading="lazy" onerror="this.remove()"></div><h3>'+p.n+'</h3><p>'+p.d+'</p><div class="row"><span>'+p.t+'</span><b>'+p.p+'</b></div>'+(p.x?'<small>'+p.x+'</small>':'')+'<a class="mini" target="_blank" rel="noopener" href="'+wa("Hola, quiero pedir: "+p.n)+'">Pedir</a></article>'}).join("");
}
draw();

var nav=document.getElementById("nav");
document.getElementById("burger").onclick=function(){nav.classList.toggle("open")};
nav.addEventListener("click",function(e){if(e.target.tagName=="A")nav.classList.remove("open")});
document.querySelectorAll("[data-motivo]").forEach(function(a){a.addEventListener("click",function(){document.getElementById("mo").value=a.dataset.motivo})});
document.getElementById("f").addEventListener("submit",function(e){
 e.preventDefault();
 var g=function(i){return document.getElementById(i).value};
 window.open(wa("Hola, soy "+g("no")+" ("+g("te")+"). Motivo: "+g("mo")+". "+g("me")),"_blank");
});
var hb=document.querySelector(".hero-bg");
if(hb&&!matchMedia("(prefers-reduced-motion:reduce)").matches){addEventListener("scroll",function(){hb.style.transform="translateY("+(scrollY*.25)+"px)"},{passive:true})}


// Product Data

const products = [

{
name:"Rose Serum",
price:799,
category:"Skincare"
},

{
name:"Pink Lipstick",
price:599,
category:"Lipstick"
},

{
name:"Glow Face Wash",
price:399,
category:"Skincare"
},

{
name:"Luxury Perfume",
price:1499,
category:"Perfume"
}

];

let cart=[];

// Add to Cart

const buttons=document.querySelectorAll(".card button");

buttons.forEach((btn,index)=>{

btn.addEventListener("click",()=>{

cart.push(products[index]);

alert(products[index].name+" added to cart!");

saveCart();

updateCart();

});

});

// Save Cart

function saveCart(){

localStorage.setItem("cart",JSON.stringify(cart));

}

// Load Cart

window.onload=function(){

const saved=localStorage.getItem("cart");

if(saved){

cart=JSON.parse(saved);

updateCart();

}

}

// Update Cart Icon

function updateCart(){

const cartIcon=document.querySelector(".fa-cart-shopping");

cartIcon.setAttribute("data-count",cart.length);

cartIcon.style.position="relative";

cartIcon.style.cursor="pointer";

}

// Search Products

const search=document.getElementById("search");

search.addEventListener("keyup",function(){

const value=search.value.toLowerCase();

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

const text=card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display="block";

}

else{

card.style.display="none";

}

});

});

// Category Filter

const categoryButtons=document.querySelectorAll(".category button");

categoryButtons.forEach(button=>{

button.addEventListener("click",()=>{

const value=button.innerText;

const cards=document.querySelectorAll(".card");

cards.forEach((card,index)=>{

if(value==="All"){

card.style.display="block";

}

else if(products[index].category===value){

card.style.display="block";

}

else{

card.style.display="none";

}

});

});

});

// Wishlist

const heart=document.querySelector(".fa-heart");

let liked=false;

heart.addEventListener("click",()=>{

liked=!liked;

if(liked){

heart.style.color="red";

alert("Added to Wishlist ❤️");

}

else{

heart.style.color="#ff4f8b";

}

});

// Shop Now Button

const shop=document.querySelector(".hero button");

shop.addEventListener("click",()=>{

document.getElementById("products").scrollIntoView({

behavior:"smooth"

});

});

// Contact Form

const form=document.querySelector("form");

form.addEventListener("submit",function(e){

e.preventDefault();

const inputs=form.querySelectorAll("input,textarea");

let valid=true;

inputs.forEach(input=>{

if(input.value.trim()==""){

valid=false;

}

});

if(valid){

alert("Message Sent Successfully 💖");

form.reset();

}

else{

alert("Please fill all fields.");

}

});

// Fade Animation

const cards=document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top<window.innerHeight-100){

card.style.opacity="1";

card.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition=".6s";

});

// Back to Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="20px";
topBtn.style.bottom="20px";
topBtn.style.padding="15px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#ff4f8b";
topBtn.style.color="white";
topBtn.style.display="none";
topBtn.style.cursor="pointer";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};
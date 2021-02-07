document.addEventListener("DOMContentLoaded", start);

function start() {
    console.log("hello");
}

const overskrift = document.querySelector("h1");
overskrift.innerHTML = "LET US CHANGE THIS";

const underoverskrift = document.querySelector("h2");
underoverskrift.textContent = "The section changed"

const wrapper = document.querySelector(".wrapper");

//Artikel 1

const artikel1wrapper = document.querySelector(".article1");

const img1 = document.querySelector(".image1 img");
img1.src = "nature.jpg";

const artikel1txt = document.querySelector(".txt1");

//Artikel 2

const artikel2wrapper = document.querySelector(".article2");

let img2 = document.querySelector(".image2 img");

img2.addEventListener("click", change);

function change() {
    if (img2.src == "tech.jpg") {} else {
        img2.src = "nature.jpg";
    }
}

const artikel2txt = document.querySelector(".txt2")

//footer
const fod = document.querySelector("footer");


//Nyt billede og append
const nyartikel = document.createElement("article");
const createimg = document.createElement("img");
createimg.src = "animals.jpg";
const overskrift2 = document.createElement("h2");
overskrift2.textContent = "Hej med dig";
const pp = document.createElement("p");
pp.textContent = "lorem hej med digh vornda har du det i dag?";
nyartikel.appendChild(createimg);
nyartikel.appendChild(overskrift2);
nyartikel.appendChild(pp);

artikel1wrapper.appendChild(nyartikel);

var shadow=document.getElementById("shadowtest");

shadow.addEventListener("mouseover", shadowadd);

function shadowadd() {
    shadow.classList.add("shadow");
    console.log("hello2");
}

shadow.addEventListener("mouseout",shadowremove);

function shadowremove() {
    shadow.classList.remove("shadow");
    console.log("hello3");
}







document.addEventListener('DOMContentLoaded', ()=>console.log("hello"));


let dyr ={"navn":"Sebbe","type":"Husky","Billede":"https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1257560163-scaled-e1610062322469.jpg","levested":"Alaska"};

const placering =document.querySelector("article");

let billede2=document.querySelector("img");

placering.textContent = `Det her er ${dyr.navn} og han er en ${dyr.type} og lever i ${dyr.levested}`;

billede2.src=dyr.Billede;

console.log(billede2);

billede2.style.width="80%";
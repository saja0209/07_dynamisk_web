document.addEventListener('DOMContentLoaded', () => console.log("hello"));


let dyr = {
    "navn": "Sebbe",
    "type": "Husky",
    "Billede": "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1257560163-scaled-e1610062322469.jpg",
    "levested": "Alaska"
};

const placering = document.querySelector("article");

let billede2 = document.querySelector("img");


billede2.src = dyr.Billede;


billede2.style.width = "80%";

placering.querySelector("h3").textContent = dyr.navn;

placering.querySelectorAll("p")[0].textContent=dyr.type;
placering.querySelectorAll("p")[1].textContent=dyr.levested;

document.addEventListener("DOMContentLoaded", start);

function start() {
    console.log("hello");

}

let alleP = document.querySelectorAll("p");

alleP.forEach(paragraph => {
    paragraph.addEventListener("click", () =>{
        paragraph.classList.add("typo")
    })
});

document.querySelector("button").addEventListener("click", () => {
    alleP.forEach(paragraph => {
        paragraph.classList.remove("typo")
    })
    alleH.forEach(heading => {
        heading.classList.remove("typo2")
    })
});


let alleH = document.querySelectorAll("h3");

alleH.forEach(heading => {
    heading.addEventListener("click", () => {
        heading.classList.add("typo2");
    })
});

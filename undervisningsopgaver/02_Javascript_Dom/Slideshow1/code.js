document.addEventListener("DOMContentLoaded", start);

function start() {

    var ourArray = [1, 2, 3, 4, 5, 6, 7];
    console.log(ourArray);

    const button = document.querySelector("button")

    button.addEventListener("click", videre);

    function videre() {
        console.log("hej")
    }



}

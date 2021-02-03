document.querySelector("button").addEventListener("click", buttonClicked)

function buttonClicked() {
    let længde = document.getElementById("l").value;
    let bredde = document.getElementById("b").value;

    document.getElementById("outputareal").innerHTML=("areal = "+længde*bredde);
    document.getElementById("outputlængde").innerHTML=("længde = "+længde);
    document.getElementById("outputbredde").innerHTML=("bredde = "+bredde);
}

document.querySelector("button").addEventListener("click", buttonClicked)

function buttonClicked() {
    let længde = document.getElementById("l").value;
    let bredde = document.getElementById("b").value;

    let resultat = `Længden er ${længde} og bredden er ${bredde} meter. Arealet er dermed ${areal(længde,bredde)}`;
    console.log(resultat);
}

function areal(l,b) {
    return l*b;
}

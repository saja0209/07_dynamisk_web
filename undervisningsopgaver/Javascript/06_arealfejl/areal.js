document.querySelector("button").addEventListener("click", buttonClicked)

function buttonClicked() {
    let længde = document.getElementById("l").value;
    let bredde = document.getElementById("b").value;
    let a = areal(længde, bredde);
    let resultat;
    if (isNaN(a)) {
        resultat = "Det er er ikke et tal";
    }

    else if (a => 0) {
        resultat = `Så er ${længde} meter og bredden ${bredde} meter og dermed er arealet ${a}`;
    }

    console.log(resultat);

}

function areal(l, b) {
    return l * b;
}

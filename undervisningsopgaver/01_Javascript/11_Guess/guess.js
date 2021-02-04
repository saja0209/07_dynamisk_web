document.getElementById("knap").addEventListener("click", beregn);
let resultat;

const randomnumber = Math.round(Math.random()*20);
console.log(randomnumber);


document.querySelector("#knap").addEventListener("click", beregn);


function beregn() {
    let tal = document.getElementById("tal").value
    if (tal < randomnumber) {
        resultat = "Det er for lavt, du skal højere oppe"
        console.log(resultat);
    } else if (tal == randomnumber) {
        resultat = "Det er det korrekte tal"
        console.log(resultat);
    } else {
        resultat = "Det er for højt, du skal længere ned"
        console.log(resultat);
    }
}

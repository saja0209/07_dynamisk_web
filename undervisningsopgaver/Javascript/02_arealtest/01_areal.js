let længde = 12;
let bredde = 10;
let areal = længde * bredde;
let resultat;
if (areal < 100) {
    resultat = "arealet er for lille";
} else if (areal < 200) {
   resultat = "arealet er ok";
} else{
    resultat ="arealet er for stort";
}

console.log(resultat);

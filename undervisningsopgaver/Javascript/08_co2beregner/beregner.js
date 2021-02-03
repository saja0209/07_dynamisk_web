document.getElementById("beregn").addEventListener("click", beregn2);

function beregn2() {
    let timer=document.getElementById("timer2").value;
    const a=109;
    let resultat=`Da du har sat i flyet i ${timer} timer, får du udledt så meget CO2 ${a*timer} kg`
    console.log(resultat);
}

document.getElementById("beregn").addEventListener("click", beregn2);

function beregn2() {
    let timer=document.getElementById("timer2").value;
    const a=109;
    let resultat=`Da du har sat i flyet i ${timer} timer, får du udledt så meget CO2 ${a*timer} kg`
    console.log(resultat);
    let samlet=(a*timer);

    if (samlet<100) {
        samlet="Tæt på Thunberg"
        console.log(samlet);
    }

    if (samlet > 100 && samlet < 200) {
        samlet="Jaja, du behøver ikke at melde dig ud af Å!";
        console.log(samlet);
    }
    if (samlet > 200 && samlet < 600) {
        samlet="Det er godt for turismen i nordeuropa"
        console.log(samlet);
    }
    else if (samlet >600) {
        samlet="Nå ja vi kan jo altid kolonisere en anden planet..."
        console.log(samlet);
    }
}


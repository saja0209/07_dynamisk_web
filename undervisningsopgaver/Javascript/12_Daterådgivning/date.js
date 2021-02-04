document.querySelector("button").addEventListener("click", beregn);




function beregn() {
    let alderx = document.querySelector("#alderx").value;
    let aldery = document.querySelector("#aldery").value;
    let samlet = aldery / 2;
    samlet +=7;
    console.log(samlet)
    let dom ="";
    if (samlet<alderx){
        dom=`Det er helt i orden at være sammen med den person da du maks må date en på ${samlet} år, og det opfylder personen. Fordi personen er ${alderx}`
        console.log(dom);
    }
    else if (samlet==alderx) {
        dom=`Uha den er tæt brother, du er lige på grænsen`
        console.log(dom);
    }
    else {
        dom=`FY FOR SATAN BRO, MISSION ABORT JAILBAIT, kan du ikke se du må maks. date en på ${samlet}, du er ${aldery} burde du ikke finde en ældre?`
        console.log(dom);
    }
}

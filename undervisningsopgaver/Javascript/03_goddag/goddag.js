document.querySelector("button").addEventListener("click", buttonClicked);

function buttonClicked(){
    let brugerNavn = document.querySelector("#navn").value;
    console.log(brugerNavn);
}

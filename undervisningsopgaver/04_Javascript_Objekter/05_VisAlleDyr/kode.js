document.addEventListener('DOMContentLoaded', start);


const fleredyr = [{
    "navn": "gris",
    "type": "pattedyr",
    "billede": "http://mabe-kea.dk/E19/pics/pig.png",
    "sted": "sumpen"
    }, {
    "navn": "frø",
    "type": "amfibie",
    "billede": "http://mabe-kea.dk/E19/pics/frog.png",
    "sted": "amazonas"
    }, {
    "navn": "ræv",
    "type": "pattedyr",
    "billede": "http://mabe-kea.dk/E19/pics/fox.png"
    }, {
    "navn": "sild",
    "type": "fisk",
    "billede": "http://mabe-kea.dk/E19/pics/sild.jpg"
    }, {
    "navn": "krokodille",
    "type": "krybdyr",
    "billede": "http://mabe-kea.dk/E19/pics/kroko.jpg"
    }];


function start() {
    let vis = document.getElementById("liste");
    fleredyr.forEach(dyr => {
        vis.innerHTML += `<p>${dyr.navn} den har typen ${dyr.type} og kommer fra ${dyr.sted}</p>`
    });


    console.log(vis);


}

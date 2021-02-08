  const header = document.querySelector("header h1");
        const medieurl = "https://persongalleri-5d3e.restdb.io/media/";
        const myHeaders = {

            "x-apikey": "600fe9211346a1524ff12e31"
        }
        document.addEventListener("DOMContentLoaded", start)
        let personer;


        // første funktion der kaldes efter DOM er loaded
        function start() {

            loadJSON();
        }

        async function loadJSON() {
            const JSONData = await fetch("https://persongalleri-5d3e.restdb.io/rest/persongalleri", {
                headers: myHeaders
            });
            personer = await JSONData.json();
            console.log("Personer", personer);
            visPersoner();
        }

        //funktion der viser personer i liste view
        function visPersoner() {

            const dest = document.querySelector("#liste"); // container til articles med en person
            const skabelon = document.querySelector("template").content; // select indhold af html skabelon (article)

            personer.forEach(person => {

                // loop igennem json (personer)
                const klon = skabelon.cloneNode(true);
                klon.querySelector(".navn").textContent = person.fornavn + " " + person.efternavn;
                klon.querySelector(".profil-billede").src = medieurl + person.billede;
                dest.appendChild(klon);

            })
        }

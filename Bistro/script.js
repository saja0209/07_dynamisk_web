  const header = document.querySelector("header h1");
  const url = "https://babushka-dd8a.restdb.io/rest/menu"
  const medieurl = "https://babushka-dd8a.restdb.io/media/";
  const myHeaders = {

      "x-apikey": "600ec2fb1346a1524ff12de4"
  }
  document.addEventListener("DOMContentLoaded", start)
  let retter;


  // første funktion der kaldes efter DOM er loaded
  function start() {

      loadJSON();
  }

  async function loadJSON() {
      console.log("loadJSON");
      const JSONData = await fetch(url, {
          headers: myHeaders
      });
      retter = await JSONData.json();
      console.log("retter", retter);
      visRetter();
  }

  //funktion der viser personer i liste view
  function visRetter() {
      console.log("visRetter");
      const dest = document.querySelector("#liste");
      const skabelon = document.querySelector("template").content;
      console.log(skabelon);


      retter.forEach(ret => {
          const klon = skabelon.cloneNode(true);
          console.log(klon);
          klon.querySelector("h2").textContent = ret.navn;
          klon.querySelector("img").src = medieurl + ret.billede;
          klon.querySelector(".beskrivelse").textContent = "Beskrivelse: " + ret.kortbeskrivelse;
          klon.querySelector(".pris").textContent = "Pris " + ret.pris + ".-";
          klon.querySelector(".ret").addEventListener("click", () => {
              menuClick(ret);
          })
          dest.appendChild(klon);
      })
  }

  function menuClick(ret) {
      console.log("hello", ret._id);
      location.href = "02_detalje.html?id=" + ret._id;
  }

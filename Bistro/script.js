  const header = document.querySelector("header h1");
  const url = "https://babushka-dd8a.restdb.io/rest/menu"
  const medieurl = "https://babushka-dd8a.restdb.io/media";
  const myHeaders = {

      "x-apikey": "600ec2fb1346a1524ff12de4"
  }
  document.addEventListener("DOMContentLoaded", start)
  let personer;


  // første funktion der kaldes efter DOM er loaded
  function start() {

      loadJSON();
  }

  async function loadJSON() {
      const JSONData = await fetch(url, {
          headers: myHeaders
      });
      personer = await JSONData.json();
      console.log("Personer", personer);
      visPersoner();
  }

  //funktion der viser personer i liste view
  function visPersoner() {
console.log(personer);

  }

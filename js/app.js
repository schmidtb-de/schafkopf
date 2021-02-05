let grundspiel = 10
let solo = 50
let schneider = 10
let schwarz = 20
let anzahlGelegt = 0
let laufende = 0
let gewinn = 0
let spielObject = {}
let spielArray = []
let spieler1 = "Sebastian"
let spieler1GesamtGewinn = 0
let spieler2 = "Ulrike"
let spieler2GesamtGewinn = 0
let spieler3 = "Benny"
let spieler3GesamtGewinn = 0
let spieler4 = "Jessica"
let spieler4GesamtGewinn = 0

/* document
  .getElementById("spielEintragen")
  .addEventListener("click", function (e) {
    e.preventDefault();
  }); */

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("js/sw.js")
    .then((reg) => console.log("service worker registered"))
    .catch((err) => console.log("service worker not registered", err))
}

function checkbox(checkbox) {
  let checkName = checkbox.dataset.name

  // Wenn Spielart gewählt wird alle Häkchen bei den Spielern entfernen und Chechkboxen wieder aktivieren
  if (checkName === "spielart") {
    document.querySelector('[data-name="spieler1"]').checked = false
    document.querySelector('[data-name="spieler1"]').disabled = false
    document.querySelector('[data-name="spieler2"]').checked = false
    document.querySelector('[data-name="spieler2"]').disabled = false
    document.querySelector('[data-name="spieler3"]').checked = false
    document.querySelector('[data-name="spieler3"]').disabled = false
    document.querySelector('[data-name="spieler4"]').checked = false
    document.querySelector('[data-name="spieler4"]').disabled = false
    document.querySelector('[data-name="gewinnerVerlierer"]').checked = false
  }

  if (checkName === "gewinnerVerlierer") {
    document.querySelector('[data-name="spieler1"]').checked = false
    document.querySelector('[data-name="spieler1"]').disabled = false
    document.querySelector('[data-name="spieler2"]').checked = false
    document.querySelector('[data-name="spieler2"]').disabled = false
    document.querySelector('[data-name="spieler3"]').checked = false
    document.querySelector('[data-name="spieler3"]').disabled = false
    document.querySelector('[data-name="spieler4"]').checked = false
    document.querySelector('[data-name="spieler4"]').disabled = false
  }

  // Wenn schwarz oder schneider gewählt wird, das andere deaktivieren
  if (checkName === "schneider" && checkbox.checked) {
    document.querySelector('[data-name="schwarz"]').disabled = true
  } else if (checkName === "schneider" && !checkbox.checked) {
    document.querySelector('[data-name="schwarz"]').disabled = false
  }
  if (checkName === "schwarz" && checkbox.checked) {
    document.querySelector('[data-name="schneider"]').disabled = true
  } else if (checkName === "schwarz" && !checkbox.checked) {
    document.querySelector('[data-name="schneider"]').disabled = false
  }

  // Wenn Solo gewählt ist, nur einen Spieler als Gewinner zulassen
  if (
    checkName === "spieler1" &&
    checkbox.checked &&
    document.querySelector('[data-name="spielart"]').checked
  ) {
    document.querySelector('[data-name="spieler2"]').disabled = true
    document.querySelector('[data-name="spieler3"]').disabled = true
    document.querySelector('[data-name="spieler4"]').disabled = true
  } else if (
    checkName === "spieler1" &&
    !checkbox.checked &&
    document.querySelector('[data-name="spielart"]').checked
  ) {
    document.querySelector('[data-name="spieler2"]').disabled = false
    document.querySelector('[data-name="spieler3"]').disabled = false
    document.querySelector('[data-name="spieler4"]').disabled = false
  }

  if (
    checkName === "spieler2" &&
    checkbox.checked &&
    document.querySelector('[data-name="spielart"]').checked
  ) {
    document.querySelector('[data-name="spieler1"]').disabled = true
    document.querySelector('[data-name="spieler3"]').disabled = true
    document.querySelector('[data-name="spieler4"]').disabled = true
  } else if (
    checkName === "spieler2" &&
    !checkbox.checked &&
    document.querySelector('[data-name="spielart"]').checked
  ) {
    document.querySelector('[data-name="spieler1"]').disabled = false
    document.querySelector('[data-name="spieler3"]').disabled = false
    document.querySelector('[data-name="spieler4"]').disabled = false
  }

  if (
    checkName === "spieler3" &&
    checkbox.checked &&
    document.querySelector('[data-name="spielart"]').checked
  ) {
    document.querySelector('[data-name="spieler1"]').disabled = true
    document.querySelector('[data-name="spieler2"]').disabled = true
    document.querySelector('[data-name="spieler4"]').disabled = true
  } else if (
    checkName === "spieler3" &&
    !checkbox.checked &&
    document.querySelector('[data-name="spielart"]').checked
  ) {
    document.querySelector('[data-name="spieler1"]').disabled = false
    document.querySelector('[data-name="spieler2"]').disabled = false
    document.querySelector('[data-name="spieler4"]').disabled = false
  }

  if (
    checkName === "spieler4" &&
    checkbox.checked &&
    document.querySelector('[data-name="spielart"]').checked
  ) {
    document.querySelector('[data-name="spieler1"]').disabled = true
    document.querySelector('[data-name="spieler3"]').disabled = true
    document.querySelector('[data-name="spieler2"]').disabled = true
  } else if (
    checkName === "spieler4" &&
    !checkbox.checked &&
    document.querySelector('[data-name="spielart"]').checked
  ) {
    document.querySelector('[data-name="spieler1"]').disabled = false
    document.querySelector('[data-name="spieler3"]').disabled = false
    document.querySelector('[data-name="spieler2"]').disabled = false
  }

  // Wenn Sauspiel gewählt ist maximal 2 Gewinner zulassen
  if (
    checkName === "spieler1" &&
    checkbox.checked &&
    !document.querySelector('[data-name="spielart"]').checked &&
    document.querySelector('[data-name="spieler2"]').checked
  ) {
    document.querySelector('[data-name="spieler4"]').disabled = true
    document.querySelector('[data-name="spieler3"]').disabled = true
  } else if (
    checkName === "spieler1" &&
    !checkbox.checked &&
    !document.querySelector('[data-name="spielart"]').checked
  ) {
    document.querySelector('[data-name="spieler4"]').disabled = false
    document.querySelector('[data-name="spieler3"]').disabled = false
    document.querySelector('[data-name="spieler2"]').disabled = false
  }

  if (
    checkName === "spieler1" &&
    checkbox.checked &&
    !document.querySelector('[data-name="spielart"]').checked &&
    document.querySelector('[data-name="spieler3"]').checked
  ) {
    document.querySelector('[data-name="spieler4"]').disabled = true
    document.querySelector('[data-name="spieler2"]').disabled = true
  } else if (
    checkName === "spieler1" &&
    !checkbox.checked &&
    !document.querySelector('[data-name="spielart"]').checked
  ) {
    document.querySelector('[data-name="spieler4"]').disabled = false
    document.querySelector('[data-name="spieler3"]').disabled = false
    document.querySelector('[data-name="spieler2"]').disabled = false
  }

  if (
    checkName === "spieler1" &&
    checkbox.checked &&
    !document.querySelector('[data-name="spielart"]').checked &&
    document.querySelector('[data-name="spieler4"]').checked
  ) {
    document.querySelector('[data-name="spieler2"]').disabled = true
    document.querySelector('[data-name="spieler3"]').disabled = true
  } else if (
    checkName === "spieler1" &&
    !checkbox.checked &&
    !document.querySelector('[data-name="spielart"]').checked
  ) {
    document.querySelector('[data-name="spieler4"]').disabled = false
    document.querySelector('[data-name="spieler3"]').disabled = false
    document.querySelector('[data-name="spieler2"]').disabled = false
  }

  if (
    checkName === "spieler2" &&
    checkbox.checked &&
    !document.querySelector('[data-name="spielart"]').checked &&
    document.querySelector('[data-name="spieler1"]').checked
  ) {
    document.querySelector('[data-name="spieler4"]').disabled = true
    document.querySelector('[data-name="spieler3"]').disabled = true
  } else if (
    checkName === "spieler2" &&
    !checkbox.checked &&
    !document.querySelector('[data-name="spielart"]').checked
  ) {
    document.querySelector('[data-name="spieler4"]').disabled = false
    document.querySelector('[data-name="spieler3"]').disabled = false
    document.querySelector('[data-name="spieler1"]').disabled = false
  }

  if (
    checkName === "spieler2" &&
    checkbox.checked &&
    !document.querySelector('[data-name="spielart"]').checked &&
    document.querySelector('[data-name="spieler3"]').checked
  ) {
    document.querySelector('[data-name="spieler4"]').disabled = true
    document.querySelector('[data-name="spieler1"]').disabled = true
  } else if (
    checkName === "spieler2" &&
    !checkbox.checked &&
    !document.querySelector('[data-name="spielart"]').checked
  ) {
    document.querySelector('[data-name="spieler4"]').disabled = false
    document.querySelector('[data-name="spieler3"]').disabled = false
    document.querySelector('[data-name="spieler1"]').disabled = false
  }

  if (
    checkName === "spieler2" &&
    checkbox.checked &&
    !document.querySelector('[data-name="spielart"]').checked &&
    document.querySelector('[data-name="spieler4"]').checked
  ) {
    document.querySelector('[data-name="spieler1"]').disabled = true
    document.querySelector('[data-name="spieler3"]').disabled = true
  } else if (
    checkName === "spieler2" &&
    !checkbox.checked &&
    !document.querySelector('[data-name="spielart"]').checked
  ) {
    document.querySelector('[data-name="spieler4"]').disabled = false
    document.querySelector('[data-name="spieler3"]').disabled = false
    document.querySelector('[data-name="spieler1"]').disabled = false
  }

  if (
    checkName === "spieler3" &&
    checkbox.checked &&
    !document.querySelector('[data-name="spielart"]').checked &&
    document.querySelector('[data-name="spieler1"]').checked
  ) {
    document.querySelector('[data-name="spieler4"]').disabled = true
    document.querySelector('[data-name="spieler2"]').disabled = true
  } else if (
    checkName === "spieler3" &&
    !checkbox.checked &&
    !document.querySelector('[data-name="spielart"]').checked
  ) {
    document.querySelector('[data-name="spieler4"]').disabled = false
    document.querySelector('[data-name="spieler2"]').disabled = false
    document.querySelector('[data-name="spieler1"]').disabled = false
  }

  if (
    checkName === "spieler3" &&
    checkbox.checked &&
    !document.querySelector('[data-name="spielart"]').checked &&
    document.querySelector('[data-name="spieler2"]').checked
  ) {
    document.querySelector('[data-name="spieler4"]').disabled = true
    document.querySelector('[data-name="spieler1"]').disabled = true
  } else if (
    checkName === "spieler3" &&
    !checkbox.checked &&
    !document.querySelector('[data-name="spielart"]').checked
  ) {
    document.querySelector('[data-name="spieler4"]').disabled = false
    document.querySelector('[data-name="spieler2"]').disabled = false
    document.querySelector('[data-name="spieler1"]').disabled = false
  }

  if (
    checkName === "spieler3" &&
    checkbox.checked &&
    !document.querySelector('[data-name="spielart"]').checked &&
    document.querySelector('[data-name="spieler4"]').checked
  ) {
    document.querySelector('[data-name="spieler1"]').disabled = true
    document.querySelector('[data-name="spieler2"]').disabled = true
  } else if (
    checkName === "spieler3" &&
    !checkbox.checked &&
    !document.querySelector('[data-name="spielart"]').checked
  ) {
    document.querySelector('[data-name="spieler4"]').disabled = false
    document.querySelector('[data-name="spieler2"]').disabled = false
    document.querySelector('[data-name="spieler1"]').disabled = false
  }

  if (
    checkName === "spieler4" &&
    checkbox.checked &&
    !document.querySelector('[data-name="spielart"]').checked &&
    document.querySelector('[data-name="spieler1"]').checked
  ) {
    document.querySelector('[data-name="spieler3"]').disabled = true
    document.querySelector('[data-name="spieler2"]').disabled = true
  } else if (
    checkName === "spieler4" &&
    !checkbox.checked &&
    !document.querySelector('[data-name="spielart"]').checked
  ) {
    document.querySelector('[data-name="spieler3"]').disabled = false
    document.querySelector('[data-name="spieler2"]').disabled = false
    document.querySelector('[data-name="spieler1"]').disabled = false
  }

  if (
    checkName === "spieler4" &&
    checkbox.checked &&
    !document.querySelector('[data-name="spielart"]').checked &&
    document.querySelector('[data-name="spieler2"]').checked
  ) {
    document.querySelector('[data-name="spieler3"]').disabled = true
    document.querySelector('[data-name="spieler1"]').disabled = true
  } else if (
    checkName === "spieler4" &&
    !checkbox.checked &&
    !document.querySelector('[data-name="spielart"]').checked
  ) {
    document.querySelector('[data-name="spieler3"]').disabled = false
    document.querySelector('[data-name="spieler2"]').disabled = false
    document.querySelector('[data-name="spieler1"]').disabled = false
  }

  if (
    checkName === "spieler4" &&
    checkbox.checked &&
    !document.querySelector('[data-name="spielart"]').checked &&
    document.querySelector('[data-name="spieler3"]').checked
  ) {
    document.querySelector('[data-name="spieler1"]').disabled = true
    document.querySelector('[data-name="spieler2"]').disabled = true
  } else if (
    checkName === "spieler4" &&
    !checkbox.checked &&
    !document.querySelector('[data-name="spielart"]').checked
  ) {
    document.querySelector('[data-name="spieler3"]').disabled = false
    document.querySelector('[data-name="spieler2"]').disabled = false
    document.querySelector('[data-name="spieler1"]').disabled = false
  }

  // Wenn Ramsch gespielt wird nur einen Verlierer zulassen
  if (
    checkName === "spieler1" &&
    checkbox.checked &&
    !document.querySelector('[data-name="spielart"]').checked &&
    document.querySelector('[data-name="gewinnerVerlierer"]').checked
  ) {
    document.querySelector('[data-name="spieler3"]').disabled = true
    document.querySelector('[data-name="spieler2"]').disabled = true
    document.querySelector('[data-name="spieler4"]').disabled = true
  } else if (
    checkName === "spieler1" &&
    !checkbox.checked &&
    !document.querySelector('[data-name="spielart"]').checked
  ) {
    document.querySelector('[data-name="spieler3"]').disabled = false
    document.querySelector('[data-name="spieler2"]').disabled = false
    document.querySelector('[data-name="spieler4"]').disabled = false
  }

  if (
    checkName === "spieler2" &&
    checkbox.checked &&
    !document.querySelector('[data-name="spielart"]').checked &&
    document.querySelector('[data-name="gewinnerVerlierer"]').checked
  ) {
    document.querySelector('[data-name="spieler3"]').disabled = true
    document.querySelector('[data-name="spieler1"]').disabled = true
    document.querySelector('[data-name="spieler4"]').disabled = true
  } else if (
    checkName === "spieler1" &&
    !checkbox.checked &&
    !document.querySelector('[data-name="spielart"]').checked
  ) {
    document.querySelector('[data-name="spieler3"]').disabled = false
    document.querySelector('[data-name="spieler1"]').disabled = false
    document.querySelector('[data-name="spieler4"]').disabled = false
  }

  if (
    checkName === "spieler3" &&
    checkbox.checked &&
    !document.querySelector('[data-name="spielart"]').checked &&
    document.querySelector('[data-name="gewinnerVerlierer"]').checked
  ) {
    document.querySelector('[data-name="spieler1"]').disabled = true
    document.querySelector('[data-name="spieler2"]').disabled = true
    document.querySelector('[data-name="spieler4"]').disabled = true
  } else if (
    checkName === "spieler1" &&
    !checkbox.checked &&
    !document.querySelector('[data-name="spielart"]').checked
  ) {
    document.querySelector('[data-name="spieler1"]').disabled = false
    document.querySelector('[data-name="spieler2"]').disabled = false
    document.querySelector('[data-name="spieler4"]').disabled = false
  }

  if (
    checkName === "spieler4" &&
    checkbox.checked &&
    !document.querySelector('[data-name="spielart"]').checked &&
    document.querySelector('[data-name="gewinnerVerlierer"]').checked
  ) {
    document.querySelector('[data-name="spieler3"]').disabled = true
    document.querySelector('[data-name="spieler2"]').disabled = true
    document.querySelector('[data-name="spieler1"]').disabled = true
  } else if (
    checkName === "spieler1" &&
    !checkbox.checked &&
    !document.querySelector('[data-name="spielart"]').checked
  ) {
    document.querySelector('[data-name="spieler3"]').disabled = false
    document.querySelector('[data-name="spieler2"]').disabled = false
    document.querySelector('[data-name="spieler1"]').disabled = false
  }
}

function gesamtGewinn() {
  // ++++++++++++ Sauspiel oder Ramsch
  if (!document.querySelector('[data-name="spielart"]').checked) {
    document.querySelectorAll("select")[0][1].disabled = true
    M.FormSelect.init(document.querySelectorAll("select"))

    laufende = parseInt(
      M.FormSelect.getInstance(
        document.querySelectorAll("select")[0]
      ).getSelectedValues()
    )

    gewinn = grundspiel + laufende

    // Wenn Kontra gegeben ist
    if (document.querySelector('[data-name="kontra"]').checked) {
      gewinn = (grundspiel + laufende) * 2
      // Wenn Kontra & Re gegeben ist
      if (document.querySelector('[data-name="re"]').checked) {
        gewinn = (grundspiel + laufende) * 4
      }
    }
    // Wenn Schneider gespielt wird
    if (document.querySelector('[data-name="schneider"]').checked) {
      gewinn = grundspiel + laufende + schneider
      // Schneider mit Kontra
      if (document.querySelector('[data-name="kontra"]').checked) {
        gewinn = (grundspiel + laufende + schneider) * 2
      }
      // Schneider mit Kontra und Re
      if (
        document.querySelector('[data-name="kontra"]').checked &&
        document.querySelector('[data-name="re"]').checked
      ) {
        gewinn = (grundspiel + laufende + schneider) * 4
      }
    }
    // Wenn Schwarz gespielt wird
    if (document.querySelector('[data-name="schwarz"]').checked) {
      gewinn = grundspiel + laufende + schwarz
      // Schwarz mit Kontra
      if (document.querySelector('[data-name="kontra"]').checked) {
        gewinn = (grundspiel + laufende + schwarz) * 2
      }
      // Schwarz mit Kontra und Re
      if (
        document.querySelector('[data-name="kontra"]').checked &&
        document.querySelector('[data-name="re"]').checked
      ) {
        gewinn = (grundspiel + laufende + schwarz) * 4
      }
    }
  }

  // +++++++++++++++++++++ Solo
  if (document.querySelector('[data-name="spielart"]').checked) {
    document.querySelectorAll("select")[0][1].disabled = false
    M.FormSelect.init(document.querySelectorAll("select"))

    laufende = parseInt(
      M.FormSelect.getInstance(
        document.querySelectorAll("select")[0]
      ).getSelectedValues()
    )

    gewinn = solo + laufende
    // Wenn Kontra gegeben ist
    if (document.querySelector('[data-name="kontra"]').checked) {
      gewinn = (solo + laufende) * 2
      // Wenn Kontra & Re gegeben ist
      if (document.querySelector('[data-name="re"]').checked) {
        gewinn = (solo + laufende) * 4
      }
    }
    // Wenn Schneider gespielt wird
    if (document.querySelector('[data-name="schneider"]').checked) {
      gewinn = solo + laufende + schneider
      // Schneider mit Kontra
      if (document.querySelector('[data-name="kontra"]').checked) {
        gewinn = (solo + schneider + laufende) * 2
      }
      // Schneider mit Kontra und Re
      if (
        document.querySelector('[data-name="kontra"]').checked &&
        document.querySelector('[data-name="re"]').checked
      ) {
        gewinn = (solo + schneider + laufende) * 4
      }
    }
    // Wenn Schwarz gespielt wird
    if (document.querySelector('[data-name="schwarz"]').checked) {
      gewinn = solo + laufende + schwarz
      // Schwarz mit Kontra
      if (document.querySelector('[data-name="kontra"]').checked) {
        gewinn = (solo + laufende + schwarz) * 2
      }
      // Schwarz mit Kontra und Re
      if (
        document.querySelector('[data-name="kontra"]').checked &&
        document.querySelector('[data-name="re"]').checked
      ) {
        gewinn = (solo + laufende + schwarz) * 4
      }
    }
  }
  if (anzahlGelegt > 0) {
    switch (anzahlGelegt) {
      case 1:
        gewinn = gewinn * 2
        break
      case 2:
        gewinn = gewinn * 2 * 2
        break
      case 3:
        gewinn = gewinn * 2 * 2 * 2
        break
      case 4:
        gewinn = gewinn * 2 * 2 * 2 * 2
      default:
        gewinn = gewinn
    }
    // gewinn = gewinn * anzahlGelegt * 2
  }
  return gewinn
}

// Wenn gelegt wird, Bilder tauschen
function gelegt(spieler_gelegt) {
  if (spieler_gelegt.src.slice(-5) === "s.png") {
    spieler_gelegt.src = "img/w.png"
    anzahlGelegt = anzahlGelegt + 1
    document.getElementById(
      "anzeige-gelegt"
    ).innerHTML = `${anzahlGelegt} mal gelegt`
    spielEintragenAktualisieren()
  } else {
    spieler_gelegt.src = "img/s.png"
    anzahlGelegt = anzahlGelegt - 1
    document.getElementById(
      "anzeige-gelegt"
    ).innerHTML = `${anzahlGelegt} mal gelegt`
    spielEintragenAktualisieren()
  }
}

// Spiel in Storage eintragen
function spielEintragenStorage() {
  if (gewinn > 0) {
    // Wenn Solo Ausgewählt ist und als Gewinner markiert
    if (
      document.querySelector('[data-name="spielart"]').checked &&
      !document.querySelector('[data-name="gewinnerVerlierer"]').checked
    ) {
      document
        .querySelectorAll('input[name="spieler"]:checked')
        .forEach((spieler) => {
          spielObject[spieler.dataset.name] = gewinn * 3
        })
      document
        .querySelectorAll('input[name="spieler"]:disabled')
        .forEach((spieler) => {
          spielObject[spieler.dataset.name] = -gewinn
        })
    }
    // Wenn Solo ausgewählt und als Verlierer markiert
    else if (
      document.querySelector('[data-name="spielart"]').checked &&
      document.querySelector('[data-name="gewinnerVerlierer"]').checked
    ) {
      document
        .querySelectorAll('input[name="spieler"]:checked')
        .forEach((spieler) => {
          spielObject[spieler.dataset.name] = -gewinn * 3
        })
      document
        .querySelectorAll('input[name="spieler"]:disabled')
        .forEach((spieler) => {
          spielObject[spieler.dataset.name] = gewinn
        })
    }
    // Wenn Sauspiel ausgewählt ist und als Verlierer markiert (Ramsch!)
    else if (
      !document.querySelector('[data-name="spielart"]').checked &&
      document.querySelector('[data-name="gewinnerVerlierer"]').checked
    ) {
      document
        .querySelectorAll('input[name="spieler"]:checked')
        .forEach((spieler) => {
          spielObject[spieler.dataset.name] = -gewinn * 3
        })
      document
        .querySelectorAll('input[name="spieler"]:disabled')
        .forEach((spieler) => {
          spielObject[spieler.dataset.name] = gewinn
        })
    }
    // Bei ganz normalem Sauspiel
    else {
      document
        .querySelectorAll('input[name="spieler"]:checked')
        .forEach((spieler) => {
          spielObject[spieler.dataset.name] = gewinn
        })
      document
        .querySelectorAll('input[name="spieler"]:disabled')
        .forEach((spieler) => {
          spielObject[spieler.dataset.name] = -gewinn
        })
    }
    localStorage.setItem(localStorage.length + 1, JSON.stringify(spielObject))
  }
}

// Paypal Links mit Whatsapp versenden
document
  .getElementById("longpress")
  .addEventListener("long-press", function (e) {
    window.open(`https://wa.me/?text=${whatsappLinks()}`, "_blank")

    function whatsappLinks() {
      return `${spieler1}: ${spieler1GesamtGewinn}, 
      ${spieler2}: ${spieler2GesamtGewinn}, 
      ${spieler3}: ${spieler3GesamtGewinn}, 
      ${spieler4}: ${spieler4GesamtGewinn}`
    }
  })

function letztesSpielLöschen() {
  localStorage.removeItem(localStorage.length)
}

document
  .getElementById("longpress-deleteall")
  .addEventListener("long-press", function (e) {
    function alleSpieleLöschen() {
      localStorage.clear()
    }
    alleSpieleLöschen()
    location.reload()
  })

function spieleListeErstellen() {
  if (localStorage.length > 0) {
    let key = localStorage.length

    if (localStorage.length === 1) {
      document.getElementById("spiele-liste").innerHTML = `<tr>
    <td>${key}</td>
    <td>${JSON.parse(localStorage.getItem(key)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key)).spieler4}</td>
    </tr>
    `
    } else if (localStorage.length === 2) {
      document.getElementById("spiele-liste").innerHTML = `<tr>
      <td>${key}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler1}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler2}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler3}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler4}</td>
      </tr>
    <tr>
    <td>${key - 1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler4}</td>
    </tr>
    `
    } else if (localStorage.length === 3) {
      document.getElementById("spiele-liste").innerHTML = `<tr>
      <td>${key}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler1}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler2}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler3}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler4}</td>
      </tr>
    <tr>
    <td>${key - 1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler4}</td>
    </tr>
    `
    } else if (localStorage.length === 4) {
      document.getElementById("spiele-liste").innerHTML = `<tr>
      <td>${key}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler1}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler2}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler3}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler4}</td>
      </tr>
    <tr>
    <td>${key - 1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 3)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 3)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 3)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 3)).spieler4}</td>
    </tr>
    `
    } else if (localStorage.length === 5) {
      document.getElementById("spiele-liste").innerHTML = `<tr>
      <td>${key}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler1}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler2}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler3}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler4}</td>
      </tr>
    <tr>
    <td>${key - 1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 3)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 3)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 3)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 3)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 4}</td>
    <td>${JSON.parse(localStorage.getItem(key - 4)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 4)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 4)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 4)).spieler4}</td>
    </tr>
    `
    } else if (localStorage.length === 6) {
      document.getElementById("spiele-liste").innerHTML = `<tr>
      <td>${key}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler1}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler2}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler3}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler4}</td>
      </tr>
    <tr>
    <td>${key - 1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 3)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 3)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 3)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 3)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 4}</td>
    <td>${JSON.parse(localStorage.getItem(key - 4)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 4)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 4)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 4)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 5}</td>
    <td>${JSON.parse(localStorage.getItem(key - 5)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 5)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 5)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 5)).spieler4}</td>
    </tr>
    `
    } else if (localStorage.length === 7) {
      document.getElementById("spiele-liste").innerHTML = `<tr>
      <td>${key}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler1}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler2}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler3}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler4}</td>
      </tr>
    <tr>
    <td>${key - 1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 3)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 3)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 3)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 3)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 4}</td>
    <td>${JSON.parse(localStorage.getItem(key - 4)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 4)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 4)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 4)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 5}</td>
    <td>${JSON.parse(localStorage.getItem(key - 5)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 5)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 5)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 5)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 6}</td>
    <td>${JSON.parse(localStorage.getItem(key - 6)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 6)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 6)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 6)).spieler4}</td>
    </tr>
    `
    } else if (localStorage.length === 8) {
      document.getElementById("spiele-liste").innerHTML = `<tr>
      <td>${key}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler1}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler2}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler3}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler4}</td>
      </tr>
    <tr>
    <td>${key - 1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 3)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 3)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 3)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 3)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 4}</td>
    <td>${JSON.parse(localStorage.getItem(key - 4)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 4)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 4)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 4)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 5}</td>
    <td>${JSON.parse(localStorage.getItem(key - 5)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 5)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 5)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 5)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 6}</td>
    <td>${JSON.parse(localStorage.getItem(key - 6)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 6)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 6)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 6)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 7}</td>
    <td>${JSON.parse(localStorage.getItem(key - 7)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 7)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 7)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 7)).spieler4}</td>
    </tr>
    `
    } else if (localStorage.length === 9) {
      document.getElementById("spiele-liste").innerHTML = `<tr>
      <td>${key}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler1}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler2}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler3}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler4}</td>
      </tr>
    <tr>
    <td>${key - 1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 3)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 3)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 3)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 3)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 4}</td>
    <td>${JSON.parse(localStorage.getItem(key - 4)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 4)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 4)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 4)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 5}</td>
    <td>${JSON.parse(localStorage.getItem(key - 5)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 5)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 5)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 5)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 6}</td>
    <td>${JSON.parse(localStorage.getItem(key - 6)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 6)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 6)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 6)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 7}</td>
    <td>${JSON.parse(localStorage.getItem(key - 7)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 7)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 7)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 7)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 8}</td>
    <td>${JSON.parse(localStorage.getItem(key - 8)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 8)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 8)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 8)).spieler4}</td>
    </tr>
    `
    } else if (localStorage.length === 10) {
      document.getElementById("spiele-liste").innerHTML = `<tr>
      <td>${key}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler1}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler2}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler3}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler4}</td>
      </tr>
    <tr>
    <td>${key - 1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 3)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 3)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 3)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 3)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 4}</td>
    <td>${JSON.parse(localStorage.getItem(key - 4)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 4)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 4)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 4)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 5}</td>
    <td>${JSON.parse(localStorage.getItem(key - 5)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 5)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 5)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 5)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 6}</td>
    <td>${JSON.parse(localStorage.getItem(key - 6)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 6)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 6)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 6)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 7}</td>
    <td>${JSON.parse(localStorage.getItem(key - 7)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 7)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 7)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 7)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 8}</td>
    <td>${JSON.parse(localStorage.getItem(key - 8)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 8)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 8)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 8)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 9}</td>
    <td>${JSON.parse(localStorage.getItem(key - 9)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 9)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 9)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 9)).spieler4}</td>
    </tr>
    `
    } else if (localStorage.length > 10) {
      document.getElementById("spiele-liste").innerHTML = `<tr>
      <td>${key}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler1}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler2}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler3}</td>
      <td>${JSON.parse(localStorage.getItem(key)).spieler4}</td>
      </tr>
    <tr>
    <td>${key - 1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 1)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 2)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 3)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 3)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 3)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 3)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 4}</td>
    <td>${JSON.parse(localStorage.getItem(key - 4)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 4)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 4)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 4)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 5}</td>
    <td>${JSON.parse(localStorage.getItem(key - 5)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 5)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 5)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 5)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 6}</td>
    <td>${JSON.parse(localStorage.getItem(key - 6)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 6)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 6)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 6)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 7}</td>
    <td>${JSON.parse(localStorage.getItem(key - 7)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 7)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 7)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 7)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 8}</td>
    <td>${JSON.parse(localStorage.getItem(key - 8)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 8)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 8)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 8)).spieler4}</td>
    </tr>
    <tr>
    <td>${key - 9}</td>
    <td>${JSON.parse(localStorage.getItem(key - 9)).spieler1}</td>
    <td>${JSON.parse(localStorage.getItem(key - 9)).spieler2}</td>
    <td>${JSON.parse(localStorage.getItem(key - 9)).spieler3}</td>
    <td>${JSON.parse(localStorage.getItem(key - 9)).spieler4}</td>
    </tr>
    `
    }
    /*     for (var i = 0; i < localStorage.length; i++) {
      // set iteration key name
      var key = localStorage.key(i);

      trSpiel = document.createElement("tr");
      tdSpieler = document.createElement("td");

      tdKey = tdSpieler.appendChild(document.createTextNode(key));

      tdSpieler1 = tdSpieler.appendChild(
        document.createTextNode(JSON.parse(localStorage.getItem(key)).spieler1)
      );

      tdSpieler2 = tdSpieler.appendChild(
        document.createTextNode(JSON.parse(localStorage.getItem(key)).spieler2)
      );

      tdSpieler3 = tdSpieler.appendChild(
        document.createTextNode(JSON.parse(localStorage.getItem(key)).spieler3)
      );

      tdSpieler4 = tdSpieler.appendChild(
        document.createTextNode(JSON.parse(localStorage.getItem(key)).spieler4)
      );

      trSpiel.appendChild(tdKey);

      trSpiel.appendChild(tdSpieler1);

      trSpiel.appendChild(tdSpieler2);

      trSpiel.appendChild(tdSpieler3);

      trSpiel.appendChild(tdSpieler4);

      document.getElementById("spiele-liste").appendChild(trSpiel); */
  } else return ""
}

function mussMischen() {
  if (
    localStorage.length === 0 ||
    localStorage.length === 4 ||
    localStorage.length === 8 ||
    localStorage.length === 12 ||
    localStorage.length === 16 ||
    localStorage.length === 20 ||
    localStorage.length === 24 ||
    localStorage.length === 28 ||
    localStorage.length === 32 ||
    localStorage.length === 36 ||
    localStorage.length === 40 ||
    localStorage.length === 44 ||
    localStorage.length === 48 ||
    localStorage.length === 52 ||
    localStorage.length === 56 ||
    localStorage.length === 60 ||
    localStorage.length === 64 ||
    localStorage.length === 68 ||
    localStorage.length === 72 ||
    localStorage.length === 76 ||
    localStorage.length === 80 ||
    localStorage.length === 84 ||
    localStorage.length === 88 ||
    localStorage.length === 92 ||
    localStorage.length === 96 ||
    localStorage.length === 100 ||
    localStorage.length === 104 ||
    localStorage.length === 108 ||
    localStorage.length === 112 ||
    localStorage.length === 116 ||
    localStorage.length === 120 ||
    localStorage.length === 124 ||
    localStorage.length === 128 ||
    localStorage.length === 132 ||
    localStorage.length === 136 ||
    localStorage.length === 140 ||
    localStorage.length === 144 ||
    localStorage.length === 148 ||
    localStorage.length === 152 ||
    localStorage.length === 156 ||
    localStorage.length === 160 ||
    localStorage.length === 164 ||
    localStorage.length === 168 ||
    localStorage.length === 172 ||
    localStorage.length === 176 ||
    localStorage.length === 180 ||
    localStorage.length === 184 ||
    localStorage.length === 188 ||
    localStorage.length === 192 ||
    localStorage.length === 196 ||
    localStorage.length === 200
  ) {
    document.getElementById("spieler1-mischen").src = "img/Bay_eichel.svg"
    document
      .getElementById("spieler2-mischen")
      .parentNode.removeChild(document.getElementById("spieler2-mischen"))
    document
      .getElementById("spieler3-mischen")
      .parentNode.removeChild(document.getElementById("spieler3-mischen"))
    document
      .getElementById("spieler4-mischen")
      .parentNode.removeChild(document.getElementById("spieler4-mischen"))
  } else if (
    localStorage.length === 1 ||
    localStorage.length === 5 ||
    localStorage.length === 9 ||
    localStorage.length === 13 ||
    localStorage.length === 17 ||
    localStorage.length === 21 ||
    localStorage.length === 25 ||
    localStorage.length === 29 ||
    localStorage.length === 33 ||
    localStorage.length === 37 ||
    localStorage.length === 41 ||
    localStorage.length === 45 ||
    localStorage.length === 49 ||
    localStorage.length === 53 ||
    localStorage.length === 57 ||
    localStorage.length === 61 ||
    localStorage.length === 65 ||
    localStorage.length === 69 ||
    localStorage.length === 73 ||
    localStorage.length === 77 ||
    localStorage.length === 81 ||
    localStorage.length === 85 ||
    localStorage.length === 89 ||
    localStorage.length === 93 ||
    localStorage.length === 97 ||
    localStorage.length === 101 ||
    localStorage.length === 105 ||
    localStorage.length === 109 ||
    localStorage.length === 113 ||
    localStorage.length === 117 ||
    localStorage.length === 121 ||
    localStorage.length === 125 ||
    localStorage.length === 129 ||
    localStorage.length === 133 ||
    localStorage.length === 137 ||
    localStorage.length === 141 ||
    localStorage.length === 145 ||
    localStorage.length === 149 ||
    localStorage.length === 153 ||
    localStorage.length === 157 ||
    localStorage.length === 161 ||
    localStorage.length === 165 ||
    localStorage.length === 169 ||
    localStorage.length === 173 ||
    localStorage.length === 177 ||
    localStorage.length === 181 ||
    localStorage.length === 185 ||
    localStorage.length === 189 ||
    localStorage.length === 193 ||
    localStorage.length === 197 ||
    localStorage.length === 201
  ) {
    document.getElementById("spieler2-mischen").src = "img/Bay_gras.svg"
    document
      .getElementById("spieler1-mischen")
      .parentNode.removeChild(document.getElementById("spieler1-mischen"))
    document
      .getElementById("spieler3-mischen")
      .parentNode.removeChild(document.getElementById("spieler3-mischen"))
    document
      .getElementById("spieler4-mischen")
      .parentNode.removeChild(document.getElementById("spieler4-mischen"))
    /*     document.getElementById("spieler1-mischen").src = "";
    document.getElementById("spieler3-mischen").src = "";
    document.getElementById("spieler4-mischen").src = ""; */
  } else if (
    localStorage.length === 2 ||
    localStorage.length === 6 ||
    localStorage.length === 10 ||
    localStorage.length === 14 ||
    localStorage.length === 18 ||
    localStorage.length === 22 ||
    localStorage.length === 26 ||
    localStorage.length === 30 ||
    localStorage.length === 34 ||
    localStorage.length === 38 ||
    localStorage.length === 42 ||
    localStorage.length === 46 ||
    localStorage.length === 50 ||
    localStorage.length === 54 ||
    localStorage.length === 58 ||
    localStorage.length === 62 ||
    localStorage.length === 66 ||
    localStorage.length === 70 ||
    localStorage.length === 74 ||
    localStorage.length === 78 ||
    localStorage.length === 82 ||
    localStorage.length === 86 ||
    localStorage.length === 90 ||
    localStorage.length === 94 ||
    localStorage.length === 98 ||
    localStorage.length === 102 ||
    localStorage.length === 106 ||
    localStorage.length === 110 ||
    localStorage.length === 114 ||
    localStorage.length === 118 ||
    localStorage.length === 122 ||
    localStorage.length === 126 ||
    localStorage.length === 130 ||
    localStorage.length === 134 ||
    localStorage.length === 138 ||
    localStorage.length === 142 ||
    localStorage.length === 146 ||
    localStorage.length === 150 ||
    localStorage.length === 154 ||
    localStorage.length === 158 ||
    localStorage.length === 162 ||
    localStorage.length === 166 ||
    localStorage.length === 170 ||
    localStorage.length === 174 ||
    localStorage.length === 178 ||
    localStorage.length === 182 ||
    localStorage.length === 186 ||
    localStorage.length === 190 ||
    localStorage.length === 194 ||
    localStorage.length === 198 ||
    localStorage.length === 202
  ) {
    document.getElementById("spieler3-mischen").src = "img/Bay_herz.svg"
    document
      .getElementById("spieler1-mischen")
      .parentNode.removeChild(document.getElementById("spieler1-mischen"))
    document
      .getElementById("spieler2-mischen")
      .parentNode.removeChild(document.getElementById("spieler2-mischen"))
    document
      .getElementById("spieler4-mischen")
      .parentNode.removeChild(document.getElementById("spieler4-mischen"))
    /*     document.getElementById("spieler1-mischen").src = "";
    document.getElementById("spieler2-mischen").src = "";
    document.getElementById("spieler4-mischen").src = ""; */
  } else if (
    localStorage.length === 3 ||
    localStorage.length === 7 ||
    localStorage.length === 11 ||
    localStorage.length === 15 ||
    localStorage.length === 19 ||
    localStorage.length === 23 ||
    localStorage.length === 27 ||
    localStorage.length === 31 ||
    localStorage.length === 35 ||
    localStorage.length === 39 ||
    localStorage.length === 43 ||
    localStorage.length === 47 ||
    localStorage.length === 51 ||
    localStorage.length === 55 ||
    localStorage.length === 59 ||
    localStorage.length === 63 ||
    localStorage.length === 67 ||
    localStorage.length === 71 ||
    localStorage.length === 75 ||
    localStorage.length === 79 ||
    localStorage.length === 83 ||
    localStorage.length === 87 ||
    localStorage.length === 91 ||
    localStorage.length === 95 ||
    localStorage.length === 99 ||
    localStorage.length === 103 ||
    localStorage.length === 107 ||
    localStorage.length === 111 ||
    localStorage.length === 115 ||
    localStorage.length === 119 ||
    localStorage.length === 123 ||
    localStorage.length === 127 ||
    localStorage.length === 131 ||
    localStorage.length === 135 ||
    localStorage.length === 139 ||
    localStorage.length === 143 ||
    localStorage.length === 147 ||
    localStorage.length === 151 ||
    localStorage.length === 155 ||
    localStorage.length === 159 ||
    localStorage.length === 163 ||
    localStorage.length === 167 ||
    localStorage.length === 171 ||
    localStorage.length === 175 ||
    localStorage.length === 179 ||
    localStorage.length === 183 ||
    localStorage.length === 187 ||
    localStorage.length === 191 ||
    localStorage.length === 195 ||
    localStorage.length === 199 ||
    localStorage.length === 203
  ) {
    document.getElementById("spieler4-mischen").src = "img/Bay_schellen.svg"
    document
      .getElementById("spieler1-mischen")
      .parentNode.removeChild(document.getElementById("spieler1-mischen"))
    document
      .getElementById("spieler2-mischen")
      .parentNode.removeChild(document.getElementById("spieler2-mischen"))
    document
      .getElementById("spieler3-mischen")
      .parentNode.removeChild(document.getElementById("spieler3-mischen"))
    /*     document.getElementById("spieler1-mischen").src = "";
    document.getElementById("spieler2-mischen").src = "";
    document.getElementById("spieler3-mischen").src = ""; */
  }
}

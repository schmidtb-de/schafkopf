export function setPlayerNamesOnNewStart() {
  if (sessionStorage.getItem("spieler1-name") === null) {
    sessionStorage.setItem("spieler1-name", "Sepp")
  }
  document.getElementById("spieler1-name").innerHTML = sessionStorage.getItem(
    "spieler1-name"
  )
  document.getElementById(
    "spieler1-name-eintragen"
  ).innerHTML = sessionStorage.getItem("spieler1-name")
  document.getElementById(
    "spieler1-anfangsbuchstabe"
  ).innerHTML = sessionStorage.getItem("spieler1-name").slice(0, 1)
  document.getElementById("spieler1-name").oninput = () => {
    sessionStorage.setItem(
      "spieler1-name",
      document.getElementById("spieler1-name").innerHTML
    )
  }

  if (sessionStorage.getItem("spieler2-name") === null) {
    sessionStorage.setItem("spieler2-name", "Uli")
  }
  document.getElementById("spieler2-name").innerHTML = sessionStorage.getItem(
    "spieler2-name"
  )
  document.getElementById(
    "spieler2-name-eintragen"
  ).innerHTML = sessionStorage.getItem("spieler2-name")
  document.getElementById(
    "spieler2-anfangsbuchstabe"
  ).innerHTML = sessionStorage.getItem("spieler2-name").slice(0, 1)
  document.getElementById("spieler2-name").oninput = () => {
    sessionStorage.setItem(
      "spieler2-name",
      document.getElementById("spieler2-name").innerHTML
    )
  }

  if (sessionStorage.getItem("spieler3-name") === null) {
    sessionStorage.setItem("spieler3-name", "Benny")
  }
  document.getElementById("spieler3-name").innerHTML = sessionStorage.getItem(
    "spieler3-name"
  )
  document.getElementById(
    "spieler3-name-eintragen"
  ).innerHTML = sessionStorage.getItem("spieler3-name")
  document.getElementById(
    "spieler3-anfangsbuchstabe"
  ).innerHTML = sessionStorage.getItem("spieler3-name").slice(0, 1)
  document.getElementById("spieler3-name").oninput = () => {
    sessionStorage.setItem(
      "spieler3-name",
      document.getElementById("spieler3-name").innerHTML
    )
  }

  if (sessionStorage.getItem("spieler4-name") === null) {
    sessionStorage.setItem("spieler4-name", "Jessy")
  }
  document.getElementById("spieler4-name").innerHTML = sessionStorage.getItem(
    "spieler4-name"
  )
  document.getElementById(
    "spieler4-name-eintragen"
  ).innerHTML = sessionStorage.getItem("spieler4-name")
  document.getElementById(
    "spieler4-anfangsbuchstabe"
  ).innerHTML = sessionStorage.getItem("spieler4-name").slice(0, 1)
  document.getElementById("spieler4-name").oninput = () => {
    sessionStorage.setItem(
      "spieler4-name",
      document.getElementById("spieler4-name").innerHTML
    )
  }
}

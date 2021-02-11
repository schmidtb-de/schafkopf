import React from "react"
import "./GameAddForm.css"

function GameAddForm() {
  return (
    <div
      id="side-form"
      class="sidenav side-form"
      onchange="spielEintragenAktualisieren()"
    >
      <form class="container section">
        {/* <!-- Switch --> */}
        <div class="switch">
          <label>
            Sauspiel
            <input
              type="checkbox"
              data-name="spielart"
              onchange="checkbox(this)"
            />
            <span class="lever"></span>
            Solo
          </label>
        </div>

        <div class="divider"></div>

        {/* <!-- Spielart--> */}
        <div class="row">
          <p class="col s6">
            <label>
              <input
                id="indeterminate-checkbox"
                type="checkbox"
                onchange="checkbox(this)"
                data-name="schneider"
              />
              <span>Schneider</span>
            </label>
          </p>
          <p class="col s6">
            <label>
              <input
                id="indeterminate-checkbox"
                type="checkbox"
                onchange="checkbox(this)"
                data-name="schwarz"
              />
              <span>Schwarz</span>
            </label>
          </p>
        </div>

        <div class="divider"></div>

        {/* <!-- Kontra & Re --> */}
        <div class="row">
          <p class="col s6">
            <label>
              <input
                id="indeterminate-checkbox"
                type="checkbox"
                data-name="kontra"
              />
              <span>Kontra</span>
            </label>
          </p>
          <p class="col s6">
            <label>
              <input
                id="indeterminate-checkbox"
                type="checkbox"
                data-name="re"
              />
              <span>Re</span>
            </label>
          </p>
        </div>

        <div class="divider"></div>

        {/* <!-- Spieler --> */}
        <div class="row">
          <p class="col s6">
            <label>
              <input
                type="checkbox"
                onchange="checkbox(this)"
                name="spieler"
                data-name="spieler1"
              />
              <span id="spieler1-name-eintragen"></span>
            </label>
          </p>
          <p class="col s6">
            <label>
              <input
                type="checkbox"
                onchange="checkbox(this)"
                name="spieler"
                data-name="spieler2"
              />
              <span id="spieler2-name-eintragen"></span>
            </label>
          </p>
          <p class="col s6">
            <label>
              <input
                type="checkbox"
                onchange="checkbox(this)"
                name="spieler"
                data-name="spieler3"
              />
              <span id="spieler3-name-eintragen"></span>
            </label>
          </p>
          <p class="col s6">
            <label>
              <input
                type="checkbox"
                onchange="checkbox(this)"
                name="spieler"
                data-name="spieler4"
              />
              <span id="spieler4-name-eintragen"></span>
            </label>
          </p>
        </div>
        <div class="row">
          <div class="switch col s8">
            <label>
              G
              <input
                type="checkbox"
                data-name="gewinnerVerlierer"
                onchange="checkbox(this)"
              />
              <span class="lever"></span>V
            </label>
          </div>
          <div class="input-field col s4">
            <select onchange="M.FormSelect.init(this)">
              <option value="0" selected>
                keine
              </option>
              <option value="20" disabled="true">
                2
              </option>
              <option value="30">3</option>
              <option value="40">4</option>
              <option value="50">5</option>
              <option value="60">6</option>
              <option value="70">7</option>
              <option value="80">8</option>
            </select>
            <label>Laufende</label>
          </div>
        </div>
        <div class="input-field center">
          <p id="anzeige-gelegt">0 mal gelegt</p>
          <button
            class="btn-large"
            id="spielEintragen"
            onclick="spielEintragenStorage()"
          >
            10
          </button>
        </div>
        <div class="row">
          <div class="input-field center">
            <button
              class="btn-small"
              id="longpress-deleteall"
              data-long-press-delay="500"
            >
              <i
                class="material-icons"
                id="longpress-deleteall"
                data-long-press-delay="5000"
              >
                delete_forever
              </i>
            </button>
            <button class="btn-small" onclick="letztesSpielLöschen()">
              <i class="material-icons">delete</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default GameAddForm

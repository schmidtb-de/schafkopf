import React from "react"
import "./PlayerCard.css"

function PlayerCard({ spieler }) {
  return (
    <div className="card-panel recipe white row" id={`${spieler}`}>
      <img src="../img/s.png" alt="schafkopf" onclick="gelegt(this)" />
      <div className="player-card-details">
        <div
          className="player-card-title"
          contentEditable="true"
          id={`${spieler}-name`}
        >
          {sessionStorage.getItem(`${spieler}-name`)}
        </div>
        <div className="player-card-additional"></div>
      </div>
      <div className="player-card-gesamt" id={`${spieler}-betrag`}>
        0
      </div>
      <div className="player-card-delete">
        <img
          src=""
          alt=""
          id={`${spieler}-mischen`}
          className="w3-animate-zoom"
        />
      </div>
    </div>
  )
}

export default PlayerCard

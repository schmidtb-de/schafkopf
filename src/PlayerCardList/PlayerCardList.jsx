import React from "react"
import "./PlayerCardList.css"
import PlayerCard from "../PlayerCard/PlayerCard"

function PlayerCardList() {
  return (
    <div className="card-list container grey-text text-darken-1">
      <PlayerCard spieler="spieler1" />
      <PlayerCard spieler="spieler2" />
      <PlayerCard spieler="spieler3" />
      <PlayerCard spieler="spieler4" />
    </div>
  )
}

export default PlayerCardList

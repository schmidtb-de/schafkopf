import React from "react"
import "./SideNav.css"

function SideNav() {
  return (
    <div className="sidenav side-menu" id="side-menu">
      <table className="striped centered">
        <thead>
          <tr>
            <th></th>
            <th id="spieler1-anfangsbuchstabe"></th>
            <th id="spieler2-anfangsbuchstabe"></th>
            <th id="spieler3-anfangsbuchstabe"></th>
            <th id="spieler4-anfangsbuchstabe"></th>
          </tr>
        </thead>
        <tbody id="spiele-liste"></tbody>
      </table>
    </div>
  )
}

export default SideNav

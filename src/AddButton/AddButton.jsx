import React from "react"
import "./AddButton.css"

function AddButton() {
  return (
    <div class="center">
      <a
        class="btn-floating btn-large add-btn sidenav-trigger"
        data-target="side-form"
        id="longpress"
        data-long-press-delay="200"
      >
        <i class="material-icons" id="longpress" data-long-press-delay="500">
          add
        </i>
      </a>
    </div>
  )
}

export default AddButton

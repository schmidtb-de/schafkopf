import { useEffect, useState } from "react"
import "./App.css"
import "materialize-css/dist/css/materialize.min.css"
import M from "materialize-css"
import { preloadImages } from "./assets/js/preloadImages"
import { setPlayerNamesOnNewStart } from "./assets/js/setPlayerNamesOnNewStart"
import Header from "./Header/Header"
import PlayerCardList from "./PlayerCardList/PlayerCardList"
import SideNav from "./SideNav/SideNav"
import AddButton from "./AddButton/AddButton"
import GameAddForm from "./GameAddForm/GameAddForm"

function App() {
  useEffect(() => {
    M.AutoInit()
    preloadImages()
    setPlayerNamesOnNewStart()
  }, [])
  return (
    <div className="App">
      <Header />
      <PlayerCardList />
      <AddButton />
      <SideNav />
      <GameAddForm />
    </div>
  )
}

export default App

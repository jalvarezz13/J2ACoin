import React from "react"
import "./app.css"
import CryptoRanking from "./components/CryptoRanking/CryptoRanking"
import logo from "./assets/logo.png"

function App() {
  return (
    <>
      <header className="header">
        <div className="header-info">
          <img className="header-logo" src={logo} alt="Logo J2A Coin"></img>
          <h1 className="header-title">J2A Coin</h1>
        </div>
        <p>Algo...</p>
      </header>
      <div className="container">
        <div className="heatmap-box">Heat Map</div>
        <div className="crypto-ranking">
          <h2>Ranking de Cryptos</h2>
          <CryptoRanking />
        </div>
        <div className="exchanges-links">Links de Exchanges</div>
      </div>
      <footer>
        <p>GitHub Repo ------------- Copyright ----------- Authors</p>
      </footer>
    </>
  )
}

export default App

import React from "react"
import CryptoRanking from "./components/CryptoRanking/CryptoRanking"
import HeatMap from "./components/HeatMap/HeatMap"
import Exchange from "./components/Exchange/Exchange"
import logo from "./assets/logo.png"
import gitHubLogo from "./assets/github.svg"
import "./app.css"

function App() {
  return (
    <div className="root-app">
      <header className="header">
        <div className="header-flex">
          <img className="header-logo" src={logo} alt="Logo J2A Coin"></img>
          <h1 className="header-title">J2A Coin</h1>
        </div>
        <a href="https://github.com/jalvarezz13/isi-J2ACoin" target="_blank" rel="noreferrer" className="header-links">
          <div className="header-flex">
            <img className="header-github-logo" src={gitHubLogo} alt="Git Hub icon"></img>
            <p className="header-github-text">GitHub</p>
          </div>
        </a>
      </header>
      <div className="container">
        <div className="crypto-ranking">
          <h2 className="titles">Crypto Ranking</h2>
          <CryptoRanking />
        </div>
        <div className="heatmap-box">
          <h2 className="titles">Market Map</h2>
          <HeatMap />
        </div>
        <div className="exchanges-links">
          <h2 className="titles">Exchanges</h2>
          <Exchange />
        </div>
      </div>
      <footer className="footer">
        <p className="footer-text">Copyright © 2022 J2ACoin. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App

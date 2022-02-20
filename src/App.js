import React from "react"
import "./app.css"
import CryptoRanking from "./components/CryptoRanking/CryptoRanking"

function App() {
  return (
    <div className="container">
      <div className="heatmap-box">Heat Map</div>
      <div className="crypto-ranking">
        <h2>Ranking de Cryptos</h2>
        <CryptoRanking />
      </div>
      <div className="exchanges-links">Links de Exchanges</div>
    </div>
  )
}

export default App

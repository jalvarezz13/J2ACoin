import React from "react"
import HeatMapItem from "../HeatMapItem/HeatMapItem"

import "./heatMap.css"

const style = (size) => {
  return {
    fontSize: size,
  }
}

const HeatMap = () => {
  return (
    <div className="heat-map">
      <div className="heat-map-1">
        <HeatMapItem slug={"bitcoin"} style={style(45)} />
      </div>
      <div className="heat-map-2">
        <HeatMapItem slug={"ethereum"} style={style(38)} />
      </div>
      <div className="heat-map-3">
        <HeatMapItem slug={"tether"} style={style(30)} />
      </div>
      <div className="heat-map-4">
        <HeatMapItem slug={"bnb"} style={style(32)} />
      </div>
      <div className="heat-map-5">
        <HeatMapItem slug={"usdc"} style={style(26)} />
      </div>
      <div className="heat-map-6">
        <HeatMapItem slug={"xrp"} style={style(20)} />
      </div>
      <div className="heat-map-7">
        <HeatMapItem slug={"terra"} style={style(18)} />
      </div>
      <div className="heat-map-8">
        <HeatMapItem slug={"solana"} style={style(15)} />
      </div>
      <div className="heat-map-9">
        <HeatMapItem slug={"cardano"} style={style(14)} />
      </div>
      <div className="heat-map-10">
        <HeatMapItem slug={"avalanche"} style={style(12)} />
      </div>
    </div>
  )
}

export default HeatMap

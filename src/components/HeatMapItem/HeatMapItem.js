import React, { useState, useEffect } from "react"
import getCryptoInfo from "../../services/getCryptoInfo"
import Loading from "../Loading/Loading"
import "./heatMapItem.css"

const HeatMapItem = ({ slug, style }) => {
  const [data, setData] = useState()
  const [gradeColor, setGradeColor] = useState()

  useEffect(
    function () {
      getCryptoInfo(slug).then((res) => setData(res))
    },
    [slug]
  )

  useEffect(
    function () {
      const gradeColor = () => {
        if (data !== undefined) {
          const percent = data.market_data.percent_change_usd_last_24_hours.toFixed(4)
          switch (true) {
            case percent <= -7.0000:
              return "rated-color-40"
            case percent <= -6.0000:
              return "rated-color-35"
            case percent <= -5.0000:
              return "rated-color-30"
            case percent <= -4.0000:
              return "rated-color-25"
            case percent <= -3.0000:
              return "rated-color-20"
            case percent <= -2.0000:
              return "rated-color-15"
            case percent <= -1.0000:
              return "rated-color-10"
            case percent <= 0.0000:
              return "rated-color-5"
            case percent > 7.0000:
              return "rated-color35"
            case percent > 6.0000:
              return "rated-color30"
            case percent > 5.0000:
              return "rated-color25"
            case percent > 4.0000:
              return "rated-color20"
            case percent > 3.0000:
              return "rated-color15"
            case percent > 2.0000:
              return "rated-color10"
            case percent > 1.0000:
              return "rated-color5"
            case percent > 0.0000:
              return "rated-color0"
            case percent === 0.0000:
              return "rated-color-is-0"
            default:
              return "heatmap-item-container-loading"
          }
        }
      }
      setGradeColor(gradeColor)
    },
    [data]
  )

  return data === undefined ? (
    <div className="heatmap-item-container-loading">
      <Loading />
    </div>
  ) : (
    <div className={`heatmap-item-container ${gradeColor}`}>
      <p className="heatmap-content" style={style}>
        {data.name}
      </p>
      <p className="heatmap-content" style={style}>
        {data.symbol}
      </p>
      <p className="heatmap-content" style={style}>
        {data.market_data.price_usd.toFixed(4)}
      </p>
      <p className="heatmap-content" style={style}>
        {data.market_data.percent_change_usd_last_24_hours.toFixed(4)}
      </p>
    </div>
  )
}

export default HeatMapItem

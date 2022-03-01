import React, { useState } from "react"
import PropTypes from "prop-types"

import "./cryptoRankingItem.css"

const CryptoRankingItem = ({ item }) => {
  const [itemData] = useState(item)

  return (
    <div className="item-container">
      <p>{itemData.cmc_rank}</p>
      <img className="coin-logo" src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${itemData.id}.png`} alt={`Logo de ${itemData.name}`} />
      <p>
        {itemData.name}({itemData.symbol})
      </p>
      <p>{itemData.quote.USD.price.toFixed(4)}$</p>
      <p className={itemData.quote.USD.percent_change_24h > 0 ? "change-value-positive" : "change-value-negative"}>
        {parseFloat(itemData.quote.USD.percent_change_24h).toFixed(4)}%
      </p>
      <p>Market cap?</p>
      <div className="item-change-7d">
        <div className="item-change-7d-text">
          <p>Últimos 7 días</p>
          <p className={itemData.quote.USD.percent_change_7d > 0 ? "change-value-positive" : "change-value-negative"}>
            {parseFloat(itemData.quote.USD.percent_change_7d).toFixed(4)}%
          </p>
        </div>
        <img
          src={`https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${itemData.id}.svg`}
          alt={`Gráfico a 7 días de ${itemData.name}`}
          className={itemData.quote.USD.percent_change_7d > 0 ? "graph-7d-positive" : "graph-7d-negative"}
        />
      </div>
    </div>
  )
}

CryptoRankingItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default CryptoRankingItem

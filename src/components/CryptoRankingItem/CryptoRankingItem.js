import React, { useState } from "react"
import PropTypes from "prop-types"
import strongbox from "../../assets/strongbox.svg"
import pick from "../../assets/pick.svg"
import "./cryptoRankingItem.css"

const CryptoRankingItem = ({ item }) => {
  const [itemData] = useState(item)
  const proofOf =
    (itemData.tags.includes("pow") && <img className="proof-of" src={pick} alt="PoW"></img>) ||
    (itemData.tags.includes("pos") && <img className="proof-of" src={strongbox} alt="PoS"></img>)

  return (
    <div className="item-container">
      <p className="item-id">{itemData.cmc_rank} </p>
      <img className="item-logo" src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${itemData.id}.png`} alt={`Logo de ${itemData.name}`} />
      <p className="item-name">
        {itemData.name} ({itemData.symbol})
      </p>
      <div className="price-container">
        <span className="item-price">{itemData.quote.USD.price.toFixed(4)} $</span>
        {proofOf}
      </div>
      <p className={itemData.quote.USD.percent_change_24h > 0 ? "change-value-positive" : "change-value-negative"}>
        {parseFloat(itemData.quote.USD.percent_change_24h).toFixed(4)}%
      </p>
      <p>{new Intl.NumberFormat("de-DE").format(itemData.quote.USD.market_cap.toFixed(2))}$</p>
      <div className="item-change-7d">
        <div className="item-change-7d-text">
          <p>7 días</p>
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
  item: PropTypes.object.isRequired
}

export default CryptoRankingItem

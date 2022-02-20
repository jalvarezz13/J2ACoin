import React, { useState } from "react"
import PropTypes from "prop-types"

import "./cryptoRankingItem.css"

const CryptoRankingItem = ({ item }) => {
  const [itemData] = useState(item)

  return (
    <div className="item-container">
      <p>#</p>
      <p>Logo (img)</p>
      <p>Nombre</p>
      <p>{itemData.symbol}</p>
      <p>Price</p>
      <p>Cambio %</p>
      <p>Market cap?</p>
      <p>Last 7 days (img)</p>
    </div>
  )
}

CryptoRankingItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default CryptoRankingItem

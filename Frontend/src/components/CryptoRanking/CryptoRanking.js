import React, { useState, useEffect } from "react"
import getRankingList from "../../services/getRankingList"
import CryptoRankingItem from "../CryptoRankingItem/CryptoRankingItem"
import Loading from "../Loading/Loading"
import "./cryptoRanking.css"
import "../CryptoRankingItem/cryptoRankingItem.css"

const CryptoRanking = () => {
  const [data, setData] = useState()

  useEffect(function () {
    getRankingList().then((res) => setData(res))
  }, [])

  return (
    <div className="ranking-list">
      {data !== undefined && (
        <div className="item-container">
          <p>#</p>
          <p className="item-name pl-10">Logo</p>
          <p className="item-name">Nombre</p>
          <p className="item-name">Precio</p>
          <p>Cambio 24h</p>
          <p>Cap. de mercado</p>
          <p>Cambio 7d</p>
        </div>
      )}
      {data === undefined ? (
        <Loading />
      ) : (
        data.map((element) => {
          return <CryptoRankingItem key={element.id} item={element} />
        })
      )}
    </div>
  )
}

export default CryptoRanking

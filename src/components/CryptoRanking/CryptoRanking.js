import React, { useState, useEffect } from "react"
import getRankingList from "../../services/getRankingList"
import CryptoRankingItem from "../CryptoRankingItem/CryptoRanking/CryptoRankingItem"
import Loading from "../Loading/Loading"
import "./cryptoRanking.css"

const CryptoRanking = () => {
  const [data, setData] = useState()

  useEffect(function () {
    getRankingList().then((res) => setData(res))
  }, [])

  return (
    <div className="ranking-list">
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

import React, { useState, useEffect } from "react"
import getExchangeList from "../../services/getExchangeList"
import ExchangeItem from "../ExchangeItem/ExchangeItem"
import Loading from "../Loading/Loading"
import "./exchange.css"

const Exchange = () => {
  const [data, setData] = useState()

  useEffect(function () {
    getExchangeList().then((res) => setData(Object.values(res)))
  }, [])

  return (
    <div className="exchange-list">
      {data === undefined ? (
        <Loading />
      ) : (
        data.map((element) => {
          return <ExchangeItem key={element.id} item={element} />
        })
      )}
    </div>
  )
}

export default Exchange

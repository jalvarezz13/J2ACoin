import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import getUrlScore from "../../services/getUrlScore"
import "./exchangeItem.css"

import blogIcon from "../../assets/blog.svg"
import feeIcon from "../../assets/fee.svg"
import telegramIcon from "../../assets/telegram.svg"
import twitterIcon from "../../assets/twitter.svg"
import webIcon from "../../assets/web.svg"
import chartIcon from "../../assets/chart.svg"
import shieldIcon from "../../assets/shield.svg"
import lockIcon from "../../assets/lock.svg"

const ExchangeItem = ({ item }) => {
  const rrssLinks = Object.values(item.urls)
  const [securePercentage, setSecurePercentage] = useState()

  useEffect(
    function () {
      getUrlScore(rrssLinks[4][0]).then((res) => setSecurePercentage(res))
    },
    [rrssLinks]
  )

  return (
    <div className="exchange-item-container">
      <img className="exchange-item-logo" src={require(`../../assets/${item.id}.svg`)} alt="exchange logo"></img>
      <h2 style={{ paddingBottom: "5px" }}>{item.name}</h2>

      {securePercentage !== undefined && (
        <div className="exchange-progressBar">
          <div className="progress-bar">
            <span className={`progress-bar-fill ${item.slug}`} style={{ width: `${securePercentage}%` }}>
              <div className="progress-bar-fill-container">
                <img className="progress-bar-icon1" src={shieldIcon} alt="" />
                {`${securePercentage}%`}
                <img className="progress-bar-icon2" src={lockIcon} alt="" />
              </div>
            </span>
          </div>
        </div>
      )}

      <div className="exchange-visit-container">
        <img className="exchange-visit-item" src={chartIcon} alt="visits icon" />
        <span style={{ width: "15px" }}></span>
        <p>{new Intl.NumberFormat("de-DE").format(item.weekly_visits)} visitas</p>
      </div>

      <div className="exchange-rrss-container">
        {rrssLinks[4].length !== 0 && (
          <a href={rrssLinks[4][0]} title="Exchange" target="_blank" rel="noreferrer">
            <img className="exchange-rrss-item" src={webIcon} alt="web icon" />
          </a>
        )}
        {rrssLinks[0].length !== 0 && (
          <a href={rrssLinks[0][0]} title="Blog" target="_blank" rel="noreferrer">
            <img className="exchange-rrss-item" src={blogIcon} alt="blog icon" />
          </a>
        )}
        {rrssLinks[2].length !== 0 && (
          <a href={rrssLinks[2][0]} title="Tarifas" target="_blank" rel="noreferrer">
            <img className="exchange-rrss-item" src={feeIcon} alt="fee icon" />
          </a>
        )}
        {rrssLinks[3].length !== 0 && (
          <a href={rrssLinks[3][0]} title="Twitter" target="_blank" rel="noreferrer">
            <img className="exchange-rrss-item" src={twitterIcon} alt="twitter icon" />
          </a>
        )}
        {rrssLinks[1].length !== 0 && (
          <a href={rrssLinks[1][0]} title="Telegram" target="_blank" rel="noreferrer">
            <img className="exchange-rrss-item" src={telegramIcon} alt="telegram icon" />
          </a>
        )}
      </div>
    </div>
  )
}

ExchangeItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default ExchangeItem

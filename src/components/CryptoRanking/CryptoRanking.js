import React, { useState, useEffect } from "react";
import getRankingList from "../../services/getRankingList";
// import PropTypes from 'prop-types'

import "./CryptoRanking.css";

const CryptoRanking = () => {
  const [data, setData] = useState();

  useEffect(function () {
    getRankingList().then((res) => setData(res));
  }, []);

  return (
    <div className="ranking-list">
      {data === undefined ? (
        <p> Cargando... </p>
      ) : (
        data.map((element) => (
          <img
            key={element.symbol}
            className="coin-logo"
            src={"https://s2.coinmarketcap.com/static/img/coins/64x64/" + element.id + ".png"}
            loading="lazy"
            alt={element.symbol}
          />
        ))
      )}
    </div>
  );
};

// CryptoRanking.propTypes = {}

export default CryptoRanking;

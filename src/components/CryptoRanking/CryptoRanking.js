import React from "react";
// import PropTypes from 'prop-types'

import "./CryptoRanking.css";

const CryptoRanking = (props) => {
  const request = async () => {
    await fetch("/ranking").then(res => res.json()).then(res => console.log(res));
  };

  request();

  return <div>HEY</div>;
};

// CryptoRanking.propTypes = {}

export default CryptoRanking;

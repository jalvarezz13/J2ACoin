const getUrlScore = async (url) => {
  return await fetch("/urlScore", {
    method: "POST",
    body: new URLSearchParams({
      url: url,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return getUrlData(url, res.api)
    })
}

const getUrlData = async (exchangeUrl, apiUrl) => {
  return await fetch("/urlData", {
    method: "POST",
    body: new URLSearchParams({
      exchangeUrl: exchangeUrl,
      apiUrl: apiUrl,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res.stats.securePercentage
    })
}

export default getUrlScore

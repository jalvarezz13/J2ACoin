const getCryptoInfo = async (slug) => {
  return await fetch(`/heatmap/${slug}`)
    .then((res) => res.json())
    .then((res) => {
      return res.data
    })
}

export default getCryptoInfo

const getRankingList = async () => {
  return await fetch("/ranking")
    .then((res) => res.json())
    .then((res) => {
      return res.data
    })
}

export default getRankingList

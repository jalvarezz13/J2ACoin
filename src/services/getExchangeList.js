const getExchangeList = async () => {
    return await fetch("/exchange")
      .then((res) => res.json())
      .then((res) => {
        return res.data
      })
  }
  
  export default getExchangeList
  
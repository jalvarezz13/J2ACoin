const getRankingList = () => {
  return fetch("/ranking")
    .then((res) => res.json())
    .then((res) => {
      return res.data;
    });
};

export default getRankingList;

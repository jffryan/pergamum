const filterByGenre = function (array, genre) {
  const result = array.filter((arr) => {
    let tempArray = arr.genre.map((el) => {
      return el.toLowerCase();
    });
    return tempArray.includes(genre);
  });
  return result;
};

export default filterByGenre;

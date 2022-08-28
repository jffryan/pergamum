const filterByGenre = function (array, genre) {
  const result = array.filter((arr) => {
    let tempArray = arr.genre.map((el) => {
      return el.toLowerCase();
    });
    console.log(tempArray);
    return tempArray.includes(genre);
  });
  return result;
};

export default filterByGenre;

const filterByYear = function (array, year) {
  if (year === "unfinished") {
    const result = array.filter((arr) => arr.dateRead.year === null);
    return result;
  } else {
    const result = array.filter((arr) => arr.dateRead.year === parseInt(year));
    return result;
  }
};

export default filterByYear;

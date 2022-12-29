const convertToUrlString = (string) => {
  return string.toLowerCase().replaceAll(" ", "-");
};

export default convertToUrlString;

import axios from "axios";

const addBook = async (book) => {
  console.log(book);
  const baseUrl = process.env.VUE_APP_API_URL;
  const url = `${baseUrl}/api/books/add`;
  const response = await axios.post(url, book);
  return response;
};

export default addBook;

import axios from "axios";

const getBooks = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const url = `${baseUrl}/api/books`;
  const response = await axios.get(url);
  return response.data;
};

export default getBooks;

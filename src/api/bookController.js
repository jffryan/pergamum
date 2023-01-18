import axios from "axios";

const addBook = async (book) => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const url = `${baseUrl}/api/books/add`;
  const response = await axios.post(url, book);
  return response;
};

const deleteBook = async (book_id) => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const url = `${baseUrl}/api/books/${book_id}/delete`;
  const response = await axios.delete(url);
  return response;
};

const getAllBooks = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const url = `${baseUrl}/api/books`;
  const response = await axios.get(url);
  return response;
};

export { addBook, deleteBook, getAllBooks };

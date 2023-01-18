import axios from "axios";

const deleteBook = async (book_id) => {
  console.log(book_id);
  const baseUrl = process.env.VUE_APP_API_URL;
  const url = `${baseUrl}/api/books/${book_id}/delete`;
  const response = await axios.delete(url);
  return response;
};

export default deleteBook;

import axios from "axios";

const addAuthor = async (author) => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const url = `${baseUrl}/api/authors/add`;
  const response = await axios.post(url, author);
  return response;
};

const deleteAuthor = async (author_id) => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const url = `${baseUrl}/api/authors/${author_id}/delete`;
  const response = await axios.delete(url);
  return response;
};

const getAllAuthors = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const url = `${baseUrl}/api/authors`;
  const response = await axios.get(url);
  return response;
};

export { addAuthor, deleteAuthor, getAllAuthors };

const formatGetAllBooks = (serverResponse) => {
  // init response
  let booksFetched = [];
  for (let i = 0; i < serverResponse.length; i++) {
    let fetchedBook = serverResponse[i];
    // Format the initial JSON object as desired
    let formattedBook = {
      title: fetchedBook.title,
      subtitle: fetchedBook.subtitle,
      book_id: fetchedBook.book_id,
      author_info: [
        {
          first_name: fetchedBook.first_name,
          last_name: fetchedBook.last_name,
          full_name: fetchedBook.first_name + " " + fetchedBook.last_name,
          author_role: fetchedBook.author_role,
          author_ordinal: fetchedBook.author_ordinal,
          author_id: fetchedBook.author_id,
        },
      ],
    };
    booksFetched[i] = formattedBook;
  }
  return booksFetched;
};

export default formatGetAllBooks;

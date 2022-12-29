const quickLinksConfig = {
  books: {
    links: [
      {
        name: "books",
        text: "All books",
      },
      {
        name: "bookFormat",
        params: {
          format: "paperback",
          id: 1,
        },
        text: "Paperbacks",
      },
      {
        name: "bookFormat",
        params: {
          format: "hardcover",
          id: 2,
        },
        text: "Hardcover books",
      },
      {
        name: "bookFormat",
        params: {
          format: "ebook",
          id: 3,
        },
        text: "Ebooks",
      },
      {
        name: "bookFormat",
        params: {
          format: "pirated",
          id: 4,
        },
        text: "Pirated",
      },
      {
        name: "bookFormat",
        params: {
          format: "audiobook",
          id: 5,
        },
        text: "Audiobooks",
      },
    ],
    title: "Books",
  },
  years: {
    links: [
      {
        name: "year",
        params: {
          year: "2022",
        },
        text: "2022",
      },
      {
        name: "year",
        params: {
          year: "2021",
        },
        text: "2021",
      },
      {
        name: "year",
        params: {
          year: "2020",
        },
        text: "2020",
      },
      {
        name: "year",
        params: {
          year: "2019",
        },
        text: "2019",
      },
      {
        name: "year",
        params: {
          year: "2018",
        },
        text: "2018",
      },
    ],
    title: "Years",
  },
};

export default quickLinksConfig;

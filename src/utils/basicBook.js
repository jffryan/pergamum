export const sampleBook = {
  uniqueId: 1,
  bookId: 1,
  title: "The Library of Leng",
  subtitle: "Tracing the pre-Pleistocene scholars of Tsathoggua",
  authors: [
    {
      authorName: "John Doe",
      authorId: 1,
    },
    {
      authorName: "Jane Deer",
      authorId: 2,
    },
  ],
  genres: [
    {
      genreName: "Horror",
      genreId: 9,
    },
    {
      genreName: "Fantasy",
      genreId: 5,
    },
    {
      genreName: "History",
      genreId: 13,
    },
  ],
  edition: {
    formatName: "paperback",
    formatId: 1,
    pageCount: 492,
  },
  variants: [],
  description:
    "Explorer's diary as he follows fragments of the Pnakotic Manuscripts through Central Asia. While he does not find the library, or even the Plateau, he does find several pieces of Tsathogguan writing that suggest a location in Mongolia for further research.",
  finished: {},
};
export const finishedBook = {
  uniqueId: 2,
  bookId: 2,
  title: "Necronomicon",
  subtitle: "",
  authors: [
    {
      authorName: "Abdul Alhazred",
      authorId: 3,
    },
  ],
  genres: [
    {
      genreName: "Horror",
      genreId: 9,
    },
    {
      genreName: "Fantasy",
      genreId: 5,
    },
    {
      genreName: "Philosophy",
      genreId: 6,
    },
  ],
  edition: {
    formatName: "paperback",
    formatId: 1,
    pageCount: 852,
  },
  variants: [],
  description:
    "The Kitab al Azif (original Arabic title of the Necronomicon) was written in the early 8th century by Abdul Alhazred. It is banned in most countries and all organized ecclesiastics.",
  finished: {
    dateRead: {
      month: "12",
      day: "12",
      year: "2022",
    },
    rating: 5,
    awards: {
      name: "Best of 2022",
      level: "gold",
    },
  },
};
export const variantPaperback = {
  uniqueId: 3,
  bookId: 3,
  title: "The End of the Myth",
  subtitle: "From the Frontier to the Border Wall in the Mind of America",
  authors: [
    {
      authorName: "Greg Grandin",
      authorId: 7,
    },
  ],
  genres: [
    {
      genreName: "History",
      genreId: 13,
    },
    {
      genreName: "Immigration",
      genreId: 14,
    },
    {
      genreName: "Nonfiction",
      genreId: 12,
    },
  ],
  edition: {
    formatName: "paperback",
    formatId: 1,
    pageCount: 369,
  },
  variants: [],
  description:
    "A historical interpretation of the meaning of the frontier and westward expansion, especially as it relates to Donald Trump and the border wall. For Grandin, the frontier has always had an important symbolic role in the mindset of American politics, and its 'closure' via the border wall represents a new, dark chapter in US history.",
  finished: {
    dateRead: {
      month: "11",
      day: "14",
      year: "2021",
    },
    rating: 5,
    awards: {
      name: "Best of 2021",
      level: "silver",
    },
  },
};
export const variantAudiobook = {
  uniqueId: 4,
  bookId: 3,
  title: "The End of the Myth",
  subtitle: "From the Frontier to the Border Wall in the Mind of America",
  authors: [
    {
      authorName: "Greg Grandin",
      authorId: 7,
    },
  ],
  genres: [
    {
      genreName: "History",
      genreId: 13,
    },
    {
      genreName: "Immigration",
      genreId: 14,
    },
    {
      genreName: "Nonfiction",
      genreId: 12,
    },
  ],
  edition: {
    formatName: "audiobook",
    formatId: 5,
    runTime: 807,
  },
  variants: [],
  description:
    "A historical interpretation of the meaning of the frontier and westward expansion, especially as it relates to Donald Trump and the border wall. For Grandin, the frontier has always had an important symbolic role in the mindset of American politics, and its 'closure' via the border wall represents a new, dark chapter in US history.",
  finished: {
    dateRead: {
      month: "11",
      day: "14",
      year: "2021",
    },
    rating: 5,
    awards: {
      name: "Best of 2021",
      level: "silver",
    },
  },
};

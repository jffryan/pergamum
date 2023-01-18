import { createStore } from "vuex";

import { getAllBooks } from "@/api/bookController.js";
import filterByYear from "@/utils/filters/filterByYear";
import filterByGenre from "@/utils/filters/filterByGenre";

import {
  FETCH_BOOKS,
  FILTER_THROUGH_BOOKS,
  RECEIVE_BOOKS,
  SET_FILTER_BY_GENRE,
  SET_FILTER_BY_YEAR,
} from "@/store/variables";

// ---------------------------
//* STATE
// ---------------------------

export const state = () => {
  return {
    books: [],
    filters: {
      year: null,
      genre: null,
    },
    filteredBooks: [],
  };
};

// ---------------------------
//* MUTATIONS
// ---------------------------

export const mutations = {
  [RECEIVE_BOOKS](state, books) {
    state.books = books;
    state.filteredBooks = books;
  },
  [SET_FILTER_BY_YEAR](state, year) {
    state.filters = {
      ...state.filters,
      year,
    };
  },
  [FILTER_THROUGH_BOOKS](state) {
    let rawList = state.books;
    let yearFilter = state.filters.year;
    let genreFilter = state.filters.genre;
    if (yearFilter !== null) {
      state.filteredBooks = filterByYear(rawList, yearFilter);
    } else if (genreFilter !== null) {
      state.filteredBooks = filterByGenre(rawList, genreFilter);
    } else {
      state.filteredBooks = rawList;
    }
  },
  [SET_FILTER_BY_GENRE](state, genre) {
    // @TODO: Make this an array or possible to include more than one genre at a time
    // @TODO: Also make all filters configurable so more than one filter can be active at a time
    state.filters = {
      ...state.filters,
      genre,
    };
  },
};

// ---------------------------
//* ACTIONS
// ---------------------------

export const actions = {
  [FETCH_BOOKS]: async (context) => {
    const bookList = await getAllBooks();
    context.commit(RECEIVE_BOOKS, bookList);
  },
};

// ---------------------------
//* STORE
// ---------------------------

export default createStore({
  state,
  mutations,
  actions,
  getters: {},
  modules: {},
  strict: process.env.NODE_ENV !== "production",
});

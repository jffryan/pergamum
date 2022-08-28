import { createStore } from "vuex";

import getBooks from "@/api/getBooks";
import filterByYear from "@/utils/filters/filterByYear";

import {
  FETCH_BOOKS,
  FILTER_THROUGH_BOOKS,
  RECEIVE_BOOKS,
  SET_FILTER_BY_YEAR,
} from "@/store/variables";

// ---------------------------
//* STATE
// ---------------------------

export const state = () => {
  return {
    books: [],
    filters: {},
    filteredBooks: [],
  };
};

// ---------------------------
//* MUTATIONS
// ---------------------------

export const mutations = {
  [RECEIVE_BOOKS](state, books) {
    state.books = books;
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
    if (yearFilter !== undefined) {
      state.filteredBooks = filterByYear(rawList, yearFilter);
    } else {
      state.filteredBooks = rawList;
    }
  },
};

// ---------------------------
//* ACTIONS
// ---------------------------

export const actions = {
  [FETCH_BOOKS]: async (context) => {
    const bookList = await getBooks();
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

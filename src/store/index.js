import { createStore } from "vuex";

import getBooks from "@/api/getBooks";

import { RECEIVE_BOOKS, FETCH_BOOKS } from "@/store/variables";

// ---------------------------
//* STATE
// ---------------------------

export const state = () => {
  return {
    books: [],
  };
};

// ---------------------------
//* MUTATIONS
// ---------------------------

export const mutations = {
  [RECEIVE_BOOKS](state, books) {
    state.books = books;
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

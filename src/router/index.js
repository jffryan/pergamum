import { createRouter, createWebHistory } from "vue-router";
// @todo: Figure out a less manual way to do all this
// This is also a ton of boilerplate
const HomeView = () => import("@/views/HomeView.vue");
const BooksView = () => import("@/views/BooksView.vue");
const BookView = () => import("@/views/BookView.vue");
const YearView = () => import("@/views/YearView.vue");
const ArchiveView = () => import("@/views/ArchiveView.vue");
const StatsView = () => import("@/views/StatsView.vue");
const ReadingListView = () => import("@/views/ReadingListView.vue");
const RadarView = () => import("@/views/RadarView.vue");
const AddBookView = () => import("@/views/AddBookView.vue");
const GenreView = () => import("@/views/GenreView.vue");

// @todo: error handling? 404?

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/books",
    name: "books",
    component: BooksView,
  },
  {
    path: "/books/:id",
    name: "book",
    component: BookView,
  },
  {
    path: "/shelf/:year",
    name: "year",
    component: YearView,
  },
  {
    path: "/archive",
    name: "archive",
    component: ArchiveView,
  },
  {
    path: "/stats",
    name: "stats",
    component: StatsView,
  },
  {
    path: "/reading-list",
    name: "readingList",
    component: ReadingListView,
  },
  {
    path: "/radar",
    name: "radar",
    component: RadarView,
  },
  {
    path: "/add-book",
    name: "addBook",
    component: AddBookView,
  },
  {
    path: "/genres/:genre",
    name: "genreView",
    component: GenreView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
});

export default router;

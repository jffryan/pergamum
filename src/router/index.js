import { createRouter, createWebHistory } from "vue-router";
// @todo: Figure out a less manual way to do all this
// This is also a ton of boilerplate
import HomeView from "@/views/HomeView.vue";
import BooksView from "@/views/BooksView.vue";
import YearView from "@/views/YearView.vue";
import ArchiveView from "@/views/ArchiveView.vue";
import StatsView from "@/views/StatsView.vue";
import ReadingListView from "@/views/ReadingListView.vue";
import BestOfView from "@/views/BestOfView.vue";
import RadarView from "@/views/RadarView.vue";

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
    path: "/2022",
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
    path: "/best-of",
    name: "bestOf",
    component: BestOfView,
  },
  {
    path: "/radar",
    name: "radar",
    component: RadarView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

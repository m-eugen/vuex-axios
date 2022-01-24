<template>
  <div id="app">
    <loader></loader>
    <movies-poster-bg :poster="poster"></movies-poster-bg>
    <movies-list
      :listMovie="moviesList"
      @changePoster="onChangePoster"
    ></movies-list>
    <movies-pagination
      :current-page="currentPage"
      :per-page="moviesPearPage"
      :total="moviesLength"
      @pageChanged="onPageChanged"
    ></movies-pagination>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MoviesList from "@/components/MoviesList.vue";
import MoviesPosterBg from "@/components/MoviesPosterBg.vue";
import MoviesPagination from "./components/MoviesPagination.vue";
import Loader from "./components/Loader.vue";

export default {
  name: "App",
  components: {
    MoviesList,
    MoviesPosterBg,
    MoviesPagination,
    Loader,
  },
  data() {
    return {
      poster: "",
    };
  },
  methods: {
    ...mapActions("movies", ["changeCurrentPage"]),
    onChangePoster(poster) {
      this.poster = poster;
    },
    onPageChanged(page) {
      this.changeCurrentPage(page);
    },
  },
  computed: {
    ...mapGetters("movies", [
      "moviesList",
      "currentPage",
      "moviesPearPage",
      "moviesLength",
    ]),
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
}
</style>

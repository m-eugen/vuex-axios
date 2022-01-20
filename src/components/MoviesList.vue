<template>
  <b-container>
    <h1 class="movie-list__title">Top Movie</h1>
    <template f-if="isEmpty">
      <b-row class="list-wrapper">
        <b-col cols="3" v-for="(movie, key) in listMovie" :key="key">
          <movies-item
            :movie="movie"
            @mouseover.native="onMouseOver(movie.Poster)"
          ></movies-item>
        </b-col>
      </b-row>
    </template>
  </b-container>
</template>

<script>
import MoviesItem from "@/components/MoviesItem";
export default {
  name: "MoviesList",
  components: {
    MoviesItem,
  },
  props: {
    listMovie: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    isEmpty() {
      return Object.keys(this.listMovie).length;
    },
  },
  methods: {
    onMouseOver(poster) {
      return this.$emit("changePoster", poster);
    },
  },
};
</script>

<style scoped>
.movie-list__title {
  display: block;
  text-align: center;
  font-weight: bold;
  padding: 20px 0 40px 0;
  color: #fff;
}
</style>

<template>
  <div class="movie-item">
    <div class="movie-item__poster">
      <img :src="movie.Poster" :alt="movie.Title" />
    </div>
    <h2 class="movie-item__title">{{ movie.Title }}</h2>
  </div>
</template>

<script>
export default {
  name: "MoviesItem",
  props: {
    movie: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style scoped>
.movie-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 10px;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.226);
}

.movie-item:hover {
  cursor: pointer;
}
.movie-item__poster img {
  display: block;
  max-width: 100%;
  height: auto;
}

.movie-item__title {
  font-size: 18px;
  line-height: 1.2;
  margin-top: 20px;
  color: #fff;
}
</style>

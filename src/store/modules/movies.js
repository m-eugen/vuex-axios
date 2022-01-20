import IDs from "@/store/mock/imdb_top250.js";
import axios from "@/plugins/axios";
import mutations from "../mutations";

function serializeRes(movies) {
  return movies.reduce((acc, movie) => {
    acc[movie.imdbID] = movie;
    return acc;
  }, {});
}

const { MOVIES, CURRENT_PAGE } = mutations;

const moviesStore = {
  namespaced: true,
  state: {
    top250IDs: IDs,
    moviesPearPage: 12,
    currentPage: 1,
    movies: {},
  },
  getters: {
    moviesList: ({ movies }) => movies,
    slicedIDs:
      ({ top250IDs }) =>
      (from, to) =>
        top250IDs.slice(from, to),
    moviesPearPage: ({ moviesPearPage }) => moviesPearPage,
    currentPage: ({ currentPage }) => currentPage,
    moviesLength: ({ top250IDs }) => Object.keys(top250IDs).length,
  },
  mutations: {
    [MOVIES](state, value) {
      state.movies = value;
    },

    [CURRENT_PAGE](state, value) {
      state.currentPage = value;
    },
  },
  actions: {
    // Выносим метод из модуля
    initMoviesStore: {
      handler({ dispatch }) {
        dispatch("fetchMovies");
      },
      root: true,
    },
    async fetchMovies({ getters, commit, dispatch }) {
      try {
        dispatch("toggleLoader", true, { root: true });
        const { currentPage, moviesPearPage, slicedIDs } = getters;
        const from = currentPage * moviesPearPage - moviesPearPage;
        const to = currentPage * moviesPearPage;
        const moviesToFetch = slicedIDs(from, to);
        const responses = moviesToFetch.map((id) => axios.get(`/?i=${id}`));
        const res = await Promise.all(responses);
        const movies = serializeRes(res);
        commit(MOVIES, movies);
      } catch (err) {
        console.error(err);
      } finally {
        dispatch("toggleLoader", false, { root: true });
      }
    },

    changeCurrentPage({ commit, dispatch }, page) {
      commit(CURRENT_PAGE, page);
      dispatch("fetchMovies");
    },
  },
};

export default moviesStore;

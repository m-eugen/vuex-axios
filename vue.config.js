module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Test Vuex and Axios App";
      return args;
    });
  },
};

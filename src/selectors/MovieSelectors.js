export const getTrendingMovies = state => {
  // return state.movies;
  return Object.values(state.movies.trendingMovies);
};

export const getRecentlyMovies = state => {
  // return state.movies;
  return Object.values(state.movies.recentlyMovies);
};

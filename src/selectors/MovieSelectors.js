export const getTrendingMovies = state => {
  return Object.values(state.movies.trendingMovies);
};

export const getRecentlyMovies = state => {
  return Object.values(state.movies.recentlyMovies);
};

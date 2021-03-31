export const getTrendingMovies = state => {
  return state.movies.trendingMovies
    ? Object.values(state.movies.trendingMovies)
    : [];
};

export const getRecentlyMovies = state => {
  return state.movies.recentlyMovies
    ? Object.values(state.movies.recentlyMovies)
    : [];
};

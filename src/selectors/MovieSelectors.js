export const getTrendingMovies = state => {
  return state.movies.trendingMovies || [];
};

export const getRecentlyMovies = state => {
  return state.movies.recentlyMovies || [];
};

export const getMyMovieList = state => {
  // return state.movies.myList || []
  const unasPelis = state.movies.recentlyMovies; // for testint purposes
  return unasPelis && unasPelis.slice(0, 4);
};

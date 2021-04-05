export const getTrendingMovies = state => state.movies.trendingMovies || [];

export const getRecentlyMovies = state => state.movies.recentlyMovies || [];

export const getFeaturedMovie = state => state.movies.featuredMovie || {};

export const getMyMovieList = state => {
  // return state.movies.myList || []
  // const unasPelis = state.movies.recentlyMovies; // for testint purposes
  // return unasPelis && unasPelis.slice(0, 4);
  return [];
};

export const getMovieDetails = state => state.movies.movieDetails || {};

export const isDetailsIsLoading = state => state.movies.detailsIsLoading;

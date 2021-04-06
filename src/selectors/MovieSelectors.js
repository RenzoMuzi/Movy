export const getTrendingMovies = state => state.movies.trendingMovies || [];

export const getRecentlyMovies = state => state.movies.recentlyMovies || [];

export const getFeaturedMovie = state => state.movies.featuredMovie || {};

export const getMyMovieList = state => {
  return state.movies.myList || [];
};

export const getMovieDetails = state => state.movies.movieDetails || {};

export const isDetailsIsLoading = state => state.movies.detailsIsLoading;

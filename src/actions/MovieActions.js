import {
  getMovies,
  getMovieDetails as getMovieDetailsApi,
  getFeaturedMovie as getFeaturedMovieApi,
} from '@/controllers/MovieController';

export const TYPES = {
  MOVIE_REQUEST: 'MOVIE_REQUEST',
  MOVIE_ERROR: 'MOVIE_ERROR',
  TRENDING_MOVIE_SUCCESS: 'TRENDING_MOVIE_SUCCESS',
  RECENTLY_MOVIE_SUCCESS: 'RECENTLY_MOVIE_SUCCESS',
  FEATURED_MOVIE: 'FEATURED_MOVIE',
  MOVIE_DETAILS_SUCCESS: 'MOVIE_DETAILS_SUCCESS',
  MOVIE_DETAILS_PENDING: 'MOVIE_DETAILS_PENDING',
  MOVIE_DETAILS_REJECTED: 'MOVIE_DETAILS_REJECTED',
};

const trendingMovies = movies => {
  return {
    type: TYPES.TRENDING_MOVIE_SUCCESS,
    payload: movies,
  };
};

const recentlyMovies = movies => {
  return {
    type: TYPES.RECENTLY_MOVIE_SUCCESS,
    payload: movies,
  };
};

const featuredMovie = movie => {
  return {
    type: TYPES.FEATURED_MOVIE,
    payload: movie,
  };
};

export const getTrending = () => async dispatch => {
  const movies = await getMovies('TRENDING_MOVIES');
  dispatch(trendingMovies(movies));
};

export const getRecently = () => async dispatch => {
  const movies = await getMovies('RECENTLY_MOVIES');
  dispatch(recentlyMovies(movies));
};

export const getMovieDetails = movieId => async dispatch => {
  await dispatch({ type: TYPES.MOVIE_DETAILS_PENDING });
  try {
    const movieDetails = await getMovieDetailsApi(movieId);
    dispatch({
      type: TYPES.MOVIE_DETAILS_SUCCESS,
      payload: movieDetails,
    });
  } catch (error) {
    dispatch({
      type: TYPES.MOVIE_DETAILS_REJECTED,
    });
  }
};
export const getFeaturedMovie = () => async dispatch => {
  const movie = await getFeaturedMovieApi();
  dispatch(featuredMovie(movie));
};

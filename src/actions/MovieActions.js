import { storage } from '@/storage';
import { getMovies, getMovieDetails as getMovieDetailsApi } from '@/controllers/MovieController';

export const TYPES = {
  MOVIE_REQUEST: 'MOVIE_REQUEST',
  MOVIE_ERROR: 'MOVIE_ERROR',
  TRENDING_MOVIE_SUCCESS: 'TRENDING_MOVIE_SUCCESS',
  RECENTLY_MOVIE_SUCCESS: 'RECENTLY_MOVIE_SUCCESS',
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

export const getTrending = () => async dispatch => {
  const movies = await getMovies('TRENDING_MOVIES');
  dispatch(trendingMovies(movies));
};

export const getRecently = () => async dispatch => {
  const movies = await getMovies('RECENTLY_MOVIES');
  dispatch(recentlyMovies(movies));
};

export const getMovieDetails = (movieId) => async dispatch => {
  const movieDetails = await getMovieDetailsApi(movieId);
  dispatch({
    type: TYPES.MOVIE_DETAILS_SUCCESS,
    payload: movieDetails
  });
};
import { getMovies } from '@/controllers/MovieController';

export const TYPES = {
  MOVIE_REQUEST: 'MOVIE_REQUEST',
  MOVIE_ERROR: 'MOVIE_ERROR',
  TRENDING_MOVIE_SUCCESS: 'TRENDING_MOVIE_SUCCESS',
  RECENTLY_MOVIE_SUCCESS: 'RECENTLY_MOVIE_SUCCESS',
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
    payload: movies ,
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

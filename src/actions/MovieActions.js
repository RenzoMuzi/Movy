import {
  getMovies,
  getMovieDetails as getMovieDetailsApi,
  getFeaturedMovie as getFeaturedMovieApi,
  addMovieToList as addMovieToListApi,
  removeMovieFromList as removeMovieFromListApi,
} from '@/controllers/MovieController';

export const TYPES = {
  MOVIE_REQUEST: 'MOVIE_REQUEST',
  MOVIE_ERROR: 'MOVIE_ERROR',
  TRENDING_MOVIE_SUCCESS: 'TRENDING_MOVIE_SUCCESS',
  RECENTLY_MOVIE_SUCCESS: 'RECENTLY_MOVIE_SUCCESS',
  FEATURED_MOVIE: 'FEATURED_MOVIE',
  UPDATE_MYLIST: 'UPDATE_MYLIST',
  REMOVE_FROM_MYLIST: 'REMOVE_FROM_MYLIST',
  MOVIE_DETAILS_SUCCESS: 'MOVIE_DETAILS_SUCCESS',
  MOVIE_DETAILS_PENDING: 'MOVIE_DETAILS_PENDING',
  MOVIE_DETAILS_REJECTED: 'MOVIE_DETAILS_REJECTED',
};

const trendingMovies = movies => ({
  type: TYPES.TRENDING_MOVIE_SUCCESS,
  payload: movies,
});

const recentlyMovies = movies => ({
  type: TYPES.RECENTLY_MOVIE_SUCCESS,
  payload: movies,
});

const featuredMovie = movie => ({
  type: TYPES.FEATURED_MOVIE,
  payload: movie,
});

const updateMyList = myList => ({
  type: TYPES.UPDATE_MYLIST,
  payload: myList,
});

export const addToMyList = movie => async dispatch => {
  const movies = await addMovieToListApi(movie);
  dispatch(updateMyList(movies));
};

export const removeFromMyList = movie => async dispatch => {
  const movies = await removeMovieFromListApi(movie);
  dispatch(updateMyList(movies));
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

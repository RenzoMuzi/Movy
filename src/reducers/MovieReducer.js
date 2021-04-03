import { TYPES } from '@/actions/MovieActions';

export const movieReducer = (state = {}, { payload, type }) => {
  switch (type) {
    case TYPES.TRENDING_MOVIE_SUCCESS:
      return { ...state, trendingMovies: payload.trendingMovies };
    case TYPES.RECENTLY_MOVIE_SUCCESS:
      return { ...state, recentlyMovies: payload.recentlyMovies };
    default:
      return state;
  }
};

import { TYPES } from '@/actions/MovieActions';

export const movieReducer = (state = {}, { payload, type }) => {
  switch (type) {
    case TYPES.TRENDING_MOVIE_SUCCESS:
      return { ...state, trendingMovies: payload };
    case TYPES.RECENTLY_MOVIE_SUCCESS:
      return { ...state, recentlyMovies: payload };
    case TYPES.MOVIE_DETAILS_PENDING:
      return { ...state, detailsIsLoading: true };
    case TYPES.MOVIE_DETAILS_SUCCESS:
      return { ...state, movieDetails: payload, detailsIsLoading: false };
    case TYPES.MOVIE_DETAILS_REJECTED:
      return { ...state, detailsIsLoading: false };
    default:
      return state;
  }
};

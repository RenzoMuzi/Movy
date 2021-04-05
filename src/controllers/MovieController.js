import axios from 'axios';

const THE_MOVIE_DB = 'https://api.themoviedb.org/3';
const THE_MOVIE_DB_API_KEY = 'd73cddc6c5f510c3c4470a976bc0c6ad';

const getOptions = (path, params = {}) => ({
  method: 'GET',
  url: `${THE_MOVIE_DB}/${path}`,
  params,
});

const queryMovies = (path, queryParams) => {
  return axios
    .request(getOptions(path, queryParams))
    .then(response => response.data.results)
    .catch(error => {
      return error;
    });
};

export const getMovieDetails = async movie_id => {
  try {
    const response = await axios.get(`${THE_MOVIE_DB}${movie_id}`, {
      params: {
        api_key: THE_MOVIE_DB_API_KEY,
      },
    });
    const movieDetails = response?.data;
    return movieDetails;
  } catch (error) {
    console.log('error', error);
  }
};

export const getMovies = async TYPE_MOVIE => {
  switch (TYPE_MOVIE) {
    case 'TRENDING_MOVIES':
      const trendingMovies = await queryMovies('discover/movie', {
        api_key: THE_MOVIE_DB_API_KEY,
        language: 'en-US',
        sort_by: 'popularity.desc',
        include_video: false,
        page: '1',
      });
      return trendingMovies;
    case 'RECENTLY_MOVIES':
      const recentlyMovies = await queryMovies('trending/movie/week', {
        api_key: THE_MOVIE_DB_API_KEY,
        page: '1',
      });
      return recentlyMovies;
  }
};

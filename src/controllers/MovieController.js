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

const queryMovieDetail = imbd_id => {
  return axios
    .request(
      getOptions('find', {
        api_key: THE_MOVIE_DB_API_KEY,
        external_source: 'imdb_id',
        external_id: imbd_id,
      })
    )
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      return error;
    });
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

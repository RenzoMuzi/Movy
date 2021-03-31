import axios from 'axios';

const RAPID_API_KEY = '0ed69a40c2msh2331579c977c637p1e21dbjsnaf8fd8774a2f';
const RAPID_HOST = 'movies-tvshows-data-imdb.p.rapidapi.com';
const RAPID_HOST_ALTERNATIVE = 'movie-database-imdb-alternative.p.rapidapi.com';
const IMDB_SERVICE = 'https://movie-database-imdb-alternative.p.rapidapi.com/';
const IMDB_ALTERNATIVE = 'https://movie-database-imdb-alternative.p.rapidapi.com/';

const getOptions = (params = {}, url = IMDB_SERVICE, host = RAPID_HOST) => ({
  method: 'GET',
  url,
  params,
  headers: {
    'x-rapidapi-key': RAPID_API_KEY,
    'x-rapidapi-host': host,
  },
});

const queryMovies = queryParams => {
  return axios
    .request(getOptions(queryParams))
    .then(response => response.data.movie_results.map(movie => movie.imdb_id))
    .catch(error => {
      console.error(error);
      return error;
    });
};

const queryMovieDetail = imbd_id => {
  return axios
    .request(
      getOptions(
        {
          i: imbd_id,
          r: 'json',
        },
        IMDB_ALTERNATIVE,
        RAPID_HOST_ALTERNATIVE
      )
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
      const trendingMovies = await queryMovies({
        type: 'get-trending-movies',
        page: '1',
      });
      return Promise.all(
        trendingMovies.map(movie_id => queryMovieDetail(movie_id))
      ).then(values => values);
    case 'RECENTLY_MOVIES':
      const recentlyMovies = await queryMovies({
        type: 'get-recently-added-movies',
        page: '2',
      });
      return Promise.all(
        recentlyMovies.map(movie_id => queryMovieDetail(movie_id))
      ).then(values => values);
  }
};

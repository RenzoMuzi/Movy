import { useTheme, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addIcon, infoIcon, removeIcon } from '@/assets';
import {
  getRecentlyMovies,
  getTrendingMovies,
  getFeaturedMovie,
  getMyMovieList,
} from '@/selectors/MovieSelectors';
import {
  addToMyList,
  getRecently,
  getTrending,
  getFeaturedMovie as queryGetFeaturedMovie,
  removeFromMyList,
} from '@/actions/MovieActions';
import { HorizontalList } from '@/components/HorizontalList';
import { FeaturedItem } from '@/components/FeaturedItem';
import { NAVIGATION } from '@/constants';

export function Home() {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecently());
    dispatch(getTrending());
    dispatch(queryGetFeaturedMovie());
  }, []);

  const trendingMovies = useSelector(state => getTrendingMovies(state));

  const recentlyMovies = useSelector(state => getRecentlyMovies(state));

  const featuredMovie = useSelector(state => getFeaturedMovie(state));

  const myMovieList = useSelector(state => getMyMovieList(state));

  const getActionToList = movie => {
    if (myMovieList.findIndex(item => item.id === movie.id) === -1) {
      return {
        color: 'white',
        icon: addIcon,
        text: 'My List',
        handleOnPress: () => dispatch(addToMyList(featuredMovie)),
      };
    }
    return {
      color: 'white',
      icon: removeIcon,
      text: 'My List',
      handleOnPress: () => dispatch(removeFromMyList(featuredMovie)),
    };
  };

  const featuredIcons = () => {
    return [
      getActionToList(featuredMovie),
      {
        color: 'white',
        icon: infoIcon,
        text: 'Info',
        handleOnPress: () => {
          navigation.navigate(NAVIGATION.movieDetail, {
            movieId: featuredMovie.id,
          });
        },
      },
    ];
  };

  return (
    <ScrollView style={[{ backgroundColor: colors.background }]}>
      <FeaturedItem icons={featuredIcons()} item={featuredMovie} />
      <HorizontalList title="Recently added" items={recentlyMovies} />
      <HorizontalList title="Trending movies" items={trendingMovies} />
      {myMovieList.length > 0 && (
        <HorizontalList title="My List" items={myMovieList} />
      )}
    </ScrollView>
  );
}

import { useTheme, useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addIcon, infoIcon } from '@/assets';
import {
  getRecentlyMovies,
  getTrendingMovies,
  getMyMovieList,
  getFeaturedMovie,
} from '@/selectors/MovieSelectors';
import {
  addToMyList,
  getRecently,
  getTrending,
  getFeaturedMovie as queryGetFeaturedMovie,
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

  const featuredIcons = () => {
    return [
      {
        color: 'white',
        icon: addIcon,
        text: 'My List',
        handleOnPress: addToMyList(featuredMovie),
      },
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
    </ScrollView>
  );
}

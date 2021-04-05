import { useTheme } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Config } from 'react-native-config';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRecentlyMovies,
  getTrendingMovies,
  getMyMovieList,
} from '@/selectors/MovieSelectors';
import { getRecently, getTrending } from '@/actions/MovieActions';
import { HorizontalList } from '@/components/HorizontalList';
import { FeaturedItem } from '@/components/FeaturedItem';
import { TextStyles } from '@/theme';
import { styles } from '@/screens/Home/Home.styles';
import { strings } from '@/localization';
import { storage } from '@/storage';

export function Home() {
  const { colors } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecently());
    dispatch(getTrending());
    // console.log('trending movies Storage: ', storage.getMap('trendingMovies'));
  }, []);

  const trendingMovies = useSelector(state => getTrendingMovies(state));

  const recentlyMovies = useSelector(state => getRecentlyMovies(state));


  return (
    <ScrollView style={[{ backgroundColor: colors.background }]}>
      {/* <FeaturedItem item={trendingMovies[0]} /> */}
      <HorizontalList title="Recently added" items={recentlyMovies} />
      <HorizontalList title="Trending movies" items={trendingMovies} />
    </ScrollView>
  );
}

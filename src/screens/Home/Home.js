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
import { TextStyles } from '@/theme';
import { styles } from '@/screens/Home/Home.styles';
import { strings } from '@/localization';

export function Home() {
  const { colors } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecently());
    dispatch(getTrending());
  }, []);

  const trendingMovies = useSelector(state => {
    return getTrendingMovies(state);
  });

  const recentlyMovies = useSelector(state => {
    return getRecentlyMovies(state);
  });

  const myMovies = useSelector(state => {
    return getMyMovieList(state);
  });

  return (
    <ScrollView style={[{ backgroundColor: colors.background }]}>
      <View style={{ backgroundColor: 'red' }}>
        <Text style={[TextStyles.text, { color: colors.text }]}>Featured</Text>
      </View>
      <HorizontalList title="Recently added" items={recentlyMovies} />
      <HorizontalList title="Trending movies" items={trendingMovies} />
      {(myMovies.length > 0) && <HorizontalList title="My List" items={myMovies} />}
    </ScrollView>
  );
}

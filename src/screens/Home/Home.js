import { useTheme } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRecentlyMovies,
  getTrendingMovies,
} from '@/selectors/MovieSelectors';
import { getRecently, getTrending } from '@/actions/MovieActions';
import { HorizontalList } from '@/components/HorizontalList';

export function Home() {
  const { colors } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecently());
    dispatch(getTrending());
    // console.log('trending movies Storage: ', storage.getMap('trendingMovies'));
  }, [dispatch]);

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

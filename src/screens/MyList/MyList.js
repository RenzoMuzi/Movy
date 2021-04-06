import { useTheme } from '@react-navigation/native';
import React from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { HorizontalList } from '@/components/HorizontalList';
import { getMyMovieList } from '@/selectors/MovieSelectors';

export function MyList() {
  const { colors } = useTheme();
  const myMovies = useSelector(state => getMyMovieList(state));

  return (
    <ScrollView style={[{ backgroundColor: colors.background }]}>
      <HorizontalList title="My List" items={myMovies} />
      {/* <Text style={[TextStyles.title, { color: colors.text }]}>
        My List Screen
      </Text> */}
    </ScrollView>
  );
}

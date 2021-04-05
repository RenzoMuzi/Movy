import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { TextStyles } from '@/theme';
import { HorizontalList } from '@/components/HorizontalList';
import { getMyMovieList } from '@/selectors/MovieSelectors';
import { styles } from '@/screens/Home/Home.styles';

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

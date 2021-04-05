import { useTheme, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/actions/UserActions';
import { Button } from '@/components';
import { strings } from '@/localization';
import { styles } from '@/screens/MyList/MyList.styles';
import { TextStyles } from '@/theme';
import { HorizontalList } from '@/components/HorizontalList';
import { getMyMovieList } from '@/selectors/MovieSelectors';

export function MyList() {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const myMovies = useSelector(state => {
    return getMyMovieList(state);
  });

  const logoutUser = () => {
    dispatch(logout());
  };

  return (
    <ScrollView style={[{ backgroundColor: colors.background }]}>
      <HorizontalList
        title="My List"
        items={myMovies}
        navigation={navigation}
      />
    </ScrollView>
    // <View style={styles.container}>
    //   <Text style={[TextStyles.title, styles.title, { color: colors.text }]}>
    //     {strings.myList.message}
    //   </Text>
    //   <Button title={strings.myList.logout} onPress={logoutUser} />
    // </View>
  );
}

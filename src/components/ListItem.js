import { useTheme, useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { GET_IMAGE_IMDB, NAVIGATION } from '@/constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    display: 'flex',
    height: 180,
    marginRight: 5,
    width: 120
  },
  posterBackground: {
    flex: 1
  }
});

export function ListItem({ item, style, ...rest }) {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(NAVIGATION.movieDetail)}
    >
      <ImageBackground
        source={{ url: GET_IMAGE_IMDB(item.poster_path) }}
        style={styles.posterBackground}
      >
        <Text></Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

ListItem.propTypes = {
  item: PropTypes.object,
  style: PropTypes.object
};

ListItem.defaultProps = {
  style: null
};

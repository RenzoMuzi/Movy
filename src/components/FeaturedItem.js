import { useTheme, useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  View,
} from 'react-native';
import { addIcon, infoIcon } from '@/assets';
import { GET_IMAGE_IMDB, NAVIGATION } from '@/constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    flex: 1,
    height: 520,
  },
  infoContainer: {
    backgroundColor: 'rgba(3,4,6,0.8)',
    paddingBottom: 5,
    paddingTop: 5,
  },
  posterBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  movieTitle: {
    display: 'flex',
    alignItems: 'center',
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export function FeaturedItem({ item, style, ...rest }) {
  const { colors } = useTheme();
  const navigation = useNavigation();

  console.log('Item: ', item);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ url: GET_IMAGE_IMDB(item.poster_path) }}
        style={styles.posterBackground}
      >
        <View style={styles.infoContainer}>
          <Text style={styles.movieTitle}>{item.title}</Text>
          <View>
            <Image
              accessibilityIgnoresInvertColors
              source={addIcon}
              style={{ tintColor: 'white' }}
            />
            <Image
              accessibilityIgnoresInvertColors
              source={infoIcon}
              style={{ tintColor: 'white' }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

FeaturedItem.propTypes = {
  item: PropTypes.object,
  style: PropTypes.object,
};

FeaturedItem.defaultProps = {
  style: null,
};

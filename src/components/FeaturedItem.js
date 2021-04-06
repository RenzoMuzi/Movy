import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, ImageBackground, View } from 'react-native';
import { IconText } from '@/components/IconText';
import { GET_IMAGE_IMDB } from '@/constants';

const styles = StyleSheet.create({
  actionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'lightgray',
    flex: 1,
    height: 520,
  },
  infoContainer: {
    paddingBottom: 5,
    paddingTop: 5,
  },
  gradientMask: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  posterBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  movieTitle: {
    display: 'flex',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginRight: 10,
    marginLeft: 10,
  },
});

export function FeaturedItem({ item, style, icons, ...rest }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ url: GET_IMAGE_IMDB(item.poster_path) }}
        style={styles.posterBackground}
      >
        <LinearGradient
          colors={['#ffffff00', 'black']}
          style={styles.gradientMask}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.movieTitle}>{item.title}</Text>
          <View style={styles.actionsContainer}>
            {icons &&
              icons.map(icon => (
                <IconText
                  handleOnPress={icon.handleOnPress}
                  color={icon.color}
                  icon={icon.icon}
                  text={icon.text}
                />
              ))}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

FeaturedItem.propTypes = {
  icons: PropTypes.array,
  item: PropTypes.object,
  style: PropTypes.object,
};

FeaturedItem.defaultProps = {
  style: null,
  icons: [],
};

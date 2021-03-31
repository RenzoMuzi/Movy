import { useTheme } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    display: 'flex',
    height: 180,
    marginRight: 5,
    width: 120,
  },
  posterBackground: {
    flex: 1,
  },
});

export function ListItem({ item, style, ...rest }) {
  const { colors } = useTheme();

  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground
        source={{ url: item.Poster }}
        style={styles.posterBackground}
      >
        <Text></Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

ListItem.propTypes = {
  item: PropTypes.object,
  style: PropTypes.object,
};

ListItem.defaultProps = {
  style: null,
};

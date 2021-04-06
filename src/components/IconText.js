import React from 'react';
import PropTypes from 'prop-types';

import { Image, Text, TouchableOpacity } from 'react-native';

const styles = {
  container: {
    felx: 1,
    alignItems: 'center',
    margin: 10,
  },
  text: {
    paddingTop: 5,
  },
};

export function IconText({ color, handleOnPress, icon, text }) {
  return (
    <TouchableOpacity onPress={() => handleOnPress()} style={styles.container}>
      <Image
        accessibilityIgnoresInvertColors
        source={icon}
        style={{ tintColor: color }}
      />
      <Text style={[styles.text, { color }]}>{text}</Text>
    </TouchableOpacity>
  );
}

IconText.propTypes = {
  color: PropTypes.string.isRequired,
  handleOnPress: PropTypes.func,
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

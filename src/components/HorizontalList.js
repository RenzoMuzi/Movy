import { useTheme } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ListItem } from './ListItem';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  heading: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 16,
  },
});

export function HorizontalList({ items, style, title, navigation, ...rest }) {
  const { colors } = useTheme();

  return (
    <View>
      <Text style={[styles.heading, { color: colors.primary }]}>{title}</Text>
      <ScrollView contentContainerStyle={styles.container} horizontal>
        {items.map((item, index) => (
          <ListItem key={index} item={item} navigation={navigation} />
        ))}
      </ScrollView>
    </View>
  );
}

HorizontalList.propTypes = {
  items: PropTypes.array,
  style: PropTypes.object,
  title: PropTypes.string,
};

HorizontalList.defaultProps = {
  items: [],
  style: null,
  title: '',
};

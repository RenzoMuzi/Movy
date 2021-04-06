import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { TextStyles } from '@/theme';
import { styles } from '@/screens/Home/Home.styles';

export function Search() {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[TextStyles.title, { color: colors.text }]}>
        Search Sceen
      </Text>
    </View>
  );
}

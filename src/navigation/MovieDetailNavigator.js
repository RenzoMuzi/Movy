import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NAVIGATION } from '@/constants';
import { MovieDetail } from '@/screens';

const Stack = createNativeStackNavigator();

export function MovieDetailNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAVIGATION.movieDetail} component={MovieDetail} />
    </Stack.Navigator>
  );
}

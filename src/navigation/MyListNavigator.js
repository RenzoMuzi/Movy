import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NAVIGATION } from '@/constants';
import { MyList, MovieDetail } from '@/screens';

const Stack = createNativeStackNavigator();

export function MyListNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION.myList}
        component={MyList}
        options={{ headerLargeTitle: true }}
      />
      <Stack.Screen name={NAVIGATION.movieDetail} component={MovieDetail} />
    </Stack.Navigator>
  );
}

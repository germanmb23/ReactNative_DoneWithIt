import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListingsScreen from '../screens/ListingScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';

const Stack = createStackNavigator();

export default FeedNavigator = () => (
  <Stack.Navigator
    mode="modal"
    //screenOptions={{ headerShown: false }}
  >
    <Stack.Screen
      name="Listings"
      component={ListingsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ListingDetails"
      component={ListingDetailsScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

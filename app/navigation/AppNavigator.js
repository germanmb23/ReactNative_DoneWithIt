import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AccountScreen from '../screens/AccountScreen';
import ListingEditScreen from '../screens/ListingEditScreen';
import ListingScreen from '../screens/ListingScreen';
import AccountNavigator from './AccountNavigator';
import FeedNavigator from './FeedNavigator';
import NewListingButton from './NewListingButton';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="home"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="ListingEdit"
      component={ListingEditScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate('ListingEdit')}
          />
        ),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            size={size}
            color={color}
          />
        ),
      })}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="account"
            size={size}
            color={color}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;

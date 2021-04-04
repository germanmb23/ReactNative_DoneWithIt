import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

export default function App() {
  return <ListingDetailsScreen />;
}

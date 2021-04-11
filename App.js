import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Switch, Text, TextInput, View } from 'react-native';
import AppFormPicker from './app/components/forms/AppFormPicker';
import ListingEditScreen from './app/screens/ListingEditScreen';

import LoginScreen from './app/screens/LoginScreen';

export default function App() {
  return <ListingEditScreen></ListingEditScreen>;
}

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Switch, Text, TextInput, View } from 'react-native';

import Card from './app/components/Card';
import ListItem from './app/components/ListItem';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import AppTextInput from './app/components/AppTextInput';

export default function App() {
  const [firstName, setFirstName] = useState('');

  const [isNew, setIsNew] = useState(false);

  return (
    <Screen>
      <Switch
        value={isNew}
        onValueChange={(newValue) => setIsNew(newValue)}
      />
    </Screen>
  );
}

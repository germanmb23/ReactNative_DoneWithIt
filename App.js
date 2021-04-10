import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Switch, Text, TextInput, View } from 'react-native';

import Screen from './app/components/Screen';
import LoginScreen from './app/components/LoginScreen';

export default function App() {
  return <LoginScreen />;
}

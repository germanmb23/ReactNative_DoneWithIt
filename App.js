import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: 100,
          height: 100,
          shadowColor: 'grey',
          shadowoffset: { width: 0, height: 10 },
          shadowOpacity: 1,
          shadowRadius: 10,
          elevation: 26,
        }}
      />
    </View>
  );
}

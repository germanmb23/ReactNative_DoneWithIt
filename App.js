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
          margin: 20,
          paddingHorizontal: 10,
          paddingLeft: 30,
        }}
      >
        <View
          style={{
            backgroundColor: 'gold',
            width: 50,
            height: 50,
          }}
        ></View>
      </View>
      <View
        style={{
          backgroundColor: 'tomato',
          width: 100,
          height: 100,
          margin: 20,
        }}
      />
    </View>
  );
}

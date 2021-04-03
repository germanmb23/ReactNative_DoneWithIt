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
  let x = 1;
  console.log('App executed');

  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row', // horizontal flex (I can set it vertically)
        justifyContent: 'center', // x axis (or primary)
        alignItems: 'center', // y axis (or secondary)
        alignContent: 'center', //only works if we have wrapping
        flexWrap: 'wrap',
      }}
    >
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: 90,
          height: 300,
        }}
      />
      <View
        style={{
          backgroundColor: 'gold',
          width: 90,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: 'tomato',
          width: 90,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: 'grey',
          width: 90,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: 'greenyellow',
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}

// View it's like a div
// View -> UIView
// View -> AndroidView
// Map component into native widget

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

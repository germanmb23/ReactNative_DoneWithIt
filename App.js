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
      <Text
        style={{
          fontFamily: 'Roboto',
          fontStyle: 'italic',
          fontWeight: '600',
          fontSize: 30,
          color: 'tomato',
          textTransform: 'capitalize',
          textDecorationLine: 'underline',
          textAlign: 'center',
          lineHeight: 30,
        }}
      >
        I Love React Native! I Love React Native! I Love React Native!
        I Love React Native!
      </Text>
    </View>
  );
}

//https://docs.expo.io/guides/using-custom-fonts/

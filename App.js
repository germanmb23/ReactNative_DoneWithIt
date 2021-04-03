import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  let x = 1;
  console.log('App executed');

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!aaaaa</Text>
      <StatusBar style="auto" />
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

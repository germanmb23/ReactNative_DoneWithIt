import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './app/components/AppButton';

export default function App() {
  return (
    <View style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    }}>
      <AppButton title='Login' onPress={()=> console.log('Tapped')}/>
    </View>)
}

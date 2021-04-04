import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

import Card from './app/components/Card';

export default function App() {
  return (
    <View
      style={{
        backgroundColor: '#f8f4f4',
        padding: 20,
        paddingTop: 100,
      }}
    >
      <Card
        title="Red jacket for sale"
        subTitle="$101"
        image={require('./assets/jacket.jpg')}
      />
    </View>
  );
}

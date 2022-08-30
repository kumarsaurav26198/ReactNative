import { View, Text } from 'react-native';
import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <AppNavigation />
    </View>
  );
}
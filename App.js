import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PlantProvider } from './src/context/PlantContext';
import AppNavigator from './src/Navigation/AppNavigator';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <PlantProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <AppNavigator />
      </NavigationContainer>
    </PlantProvider>
  );
}
// App.js
import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import * as Font from 'expo-font';

import { registerRootComponent } from 'expo'

import HomePage from './screens/HomePage';


registerRootComponent(HomePage);

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Cera Pro': require('./assets/fonts/CeraPro-Regular.ttf'),
        'Cera Pro Bold': require('./assets/fonts/CeraPro-Bold.ttf'),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <HomePage />;
}

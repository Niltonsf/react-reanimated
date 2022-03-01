import React from 'react';
import { View, StatusBar, ScrollView } from 'react-native';
import { Animation1 } from './src/screens/Animation1';
import { useWindowDimensions } from 'react-native';
import { Animation2 } from './src/screens/Animation2';

const App = () => {
  const { width } = useWindowDimensions();

  return (
    <View style={{ flex: 1, width }}>
      <StatusBar barStyle="light-content" />
      <ScrollView style={{ flex: 1, width }} horizontal>
        <Animation1 />
        <Animation2 />
      </ScrollView>
    </View>
  );
};

export default App;

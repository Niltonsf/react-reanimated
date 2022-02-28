import React from 'react';
import { View, StatusBar } from 'react-native';
import { Home } from './src/screens/Home';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <Home />
    </View>
  );
};

export default App;

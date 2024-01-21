import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackScreens from './src/navigation/stackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StackScreens />
    </NavigationContainer>
  );
};

export default App;

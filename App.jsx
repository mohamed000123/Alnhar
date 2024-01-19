import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackScreens from './src/navigation/stackNavigator';
//
import MainTabs from './src/navigation/tabNavigator';
const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <NavigationContainer>
      {showSplash ? <StackScreens /> : <MainTabs />}
    </NavigationContainer>
  );
};

export default App;

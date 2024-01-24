import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Orientation from 'react-native-orientation-locker';
//
import About from '../screens/about';
import Home from '../screens/home';
const Tab = createBottomTabNavigator();

function MainTabs() {
  const [currentOrientation, setCurrentOrientation] = useState('PORTRAIT');
  useEffect(() => {
    Orientation.addOrientationListener(orientation => {
      setCurrentOrientation(orientation);
      return () => {
        Orientation.removeOrientationListener(handleOrientationChange);
      };
    });
  });
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          display: currentOrientation == 'PORTRAIT' ? 'block' : 'none',
        },
      }}>
      <Tab.Screen
        name="home-sharp"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="about"
        component={About}
        options={{
          headerShown: false,
          tabBarLabel: 'About',
          tabBarIcon: ({color, size}) => (
            <Ionicons
              name="information-circle-sharp"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabs;

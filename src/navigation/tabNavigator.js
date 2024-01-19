import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//
import About from '../screens/about';
import StackScreens from './stackNavigator';
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={StackScreens}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="about"
        component={About}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default MainTabs;

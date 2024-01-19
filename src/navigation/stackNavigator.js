import {createStackNavigator} from '@react-navigation/stack';
//
import Splash from '../screens/splash';
import Home from '../screens/home';
const Stack = createStackNavigator();

export default function StackScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  );
}

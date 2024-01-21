import {createStackNavigator} from '@react-navigation/stack';
//
import Splash from '../screens/splash';
import MainTabs from './tabNavigator';
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
        name="MainTabs"
        component={MainTabs}
      />
    </Stack.Navigator>
  );
}

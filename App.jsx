import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackScreens from './src/navigation/stackNavigator';
import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';
const App = () => {
  const [notificationData, setNotificationData] = useState(null);

  useEffect(() => {
    // Subscribe the device to the 'allUsers' topic
    const subscribeToTopic = async () => {
      try {
        await messaging().subscribeToTopic('allUsers');
        console.log('Subscribed to the topic: allUsers');
      } catch (error) {
        console.error('Error subscribing to the topic:', error);
      }
    };

    // Call the subscription function
    subscribeToTopic();

    // Set up a listener for incoming messages
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      const {title, body} = remoteMessage.data;

      // Update the state with notification data
      setNotificationData({title, body});

      // Display an alert with the message content
      Alert.alert(title, body);
    });

    return () => {
      // Clean up the listener when the component unmounts
      unsubscribe();
    };
  }, []);

  return (
    <NavigationContainer>
      <StackScreens />
    </NavigationContainer>
  );
};

export default App;

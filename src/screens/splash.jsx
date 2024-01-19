import React, {useEffect} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
const Splash = ({navigation}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Home');
    }, 1500);
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/splash.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Customize the background color
  },
  logo: {
    width: '100%', // Customize the width of the logo
    height: '100%', // Customize the height of the logo
  },
});

export default Splash;

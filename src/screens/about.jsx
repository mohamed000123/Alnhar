import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  Linking,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const About = () => {
  const handlePress1 = () => {
    Linking.openURL(
      'https://www.tiktok.com/@alnaharaljadid?_t=8j8JRrusbX4&_r=1',
    );
  };
  const handlePress2 = () => {
    Linking.openURL(
      'https://www.instagram.com/alnaharaljadid?igsh=MWNubWJzZHgxbTk4NA==',
    );
  };
  const handlePress3 = () => {
    Linking.openURL('https://youtube.com/@ALNAHARALJADID?si=akWDNUtyFZMWyP8q');
  };
  const handlePress4 = () => {
    Linking.openURL('https://www.facebook.com/ALNAHARALJADID?mibextid=ZbWKwL');
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>about us</Text>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={{padding: 7}}>
        ALNAHARALJADID satellite channel A diverse Gulf Arab channel that began
        broadcasting in February 2022 It presents international foreign
        entertainment content without breaks It includes some Arabic, cultural
        and medical programs Frequency 11555 vertical
      </Text>
      <Text style={{...styles.heading, marginTop: 30}}>find us on:</Text>
      <TouchableOpacity onPress={handlePress1} style={styles.icon}>
        <Image source={require('../assets/tiktok.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress2} style={styles.icon}>
        <Image source={require('../assets/instgram.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress3} style={styles.icon}>
        <Image source={require('../assets/youtube.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress4} style={styles.icon}>
        <Image source={require('../assets/facebook.png')} style={styles.icon} />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
  },
  logo: {
    width: '100%',
    height: 300,
  },
  icon: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
});

export default About;

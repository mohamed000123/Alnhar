import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  Linking,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

const About = () => {
  const [phoneOrientation, setOrientation] = useState('PORTRAIT');

  useEffect(() => {
    Dimensions.addEventListener('change', ({window: {width, height}}) => {
      if (width < height) {
        setOrientation('PORTRAIT');
      } else {
        setOrientation('LANDSCAPE');
      }
    });
  }, []);
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
      <Text
        style={{
          ...styles.title,
          padding: phoneOrientation == 'PORTRAIT' ? '8%' : '3%',
        }}>
        About ALNAHARALJADID
      </Text>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={{padding: 10, marginTop: 17}}>
        ALNAHARALJADID satellite channel A diverse Gulf Arab channel that began
        broadcasting in February 2022 It presents international foreign
        entertainment content without breaks It includes some Arabic, cultural
        and medical programs Frequency 11555 vertical
      </Text>
      <Text style={{...styles.heading, marginTop: 30}}>find us on:</Text>
      <View style={styles.social}>
        <TouchableOpacity onPress={handlePress1} style={styles.icon}>
          <Image source={require('../assets/tiktok.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress2} style={styles.icon}>
          <Image
            source={require('../assets/instgram.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress3} style={styles.icon}>
          <Image
            source={require('../assets/youtube.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress4} style={styles.icon}>
          <Image
            source={require('../assets/facebook.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
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
  },
  social: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
});

export default About;

import React, {useState, useEffect} from 'react';
import {View, Dimensions, StyleSheet, Pressable} from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import Icon from 'react-native-vector-icons/Feather';

const Home = () => {
  const [orientation, setOrientation] = useState('PORTRAIT');

  useEffect(() => {
    Dimensions.addEventListener('change', ({window: {width, height}}) => {
      if (width < height) {
        setOrientation('PORTRAIT');
      } else {
        setOrientation('LANDSCAPE');
      }
    });
  }, []);
  const [isLocked, setIsLocked] = useState(true);

  useEffect(() => {
    if (isLocked) {
      Orientation.lockToLandscape();
    } else {
      Orientation.lockToPortrait();
    }
  }, [isLocked]);

  const toggleOrientation = () => {
    setIsLocked(!isLocked);
  };
  return (
    <>
      <View style={styles.container}>
        <Video
          style={styles.video}
          resizeMode={orientation == 'PORTRAIT' ? '' : 'stretch'}
          repeat
          // source={{uri: 'https://ffs1.gulfsat.com/ALNAHAR_ALJADID/video.m3u8'}}
          source={{
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          }}
        />
        <Pressable onPress={toggleOrientation} style={styles.icon}>
          <Icon name="maximize-2" size={35} color="#900" />
        </Pressable>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    top: '0%',
    right: '1%',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});
export default Home;

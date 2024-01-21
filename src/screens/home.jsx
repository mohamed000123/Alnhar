import React, {useState, useEffect} from 'react';
import {View, Dimensions} from 'react-native';
import Video from 'react-native-video';

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

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Video
        style={{
          width: '100%',
          height: '100%',
        }}
        resizeMode={orientation == 'PORTRAIT' ? '' : 'stretch'}
        repeat
        // source={{uri: 'https://ffs1.gulfsat.com/ALNAHAR_ALJADID/video.m3u8'}}
        source={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
      />
    </View>
  );
};

export default Home;

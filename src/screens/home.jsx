import React from 'react';
import {View} from 'react-native';
import Video from 'react-native-video';

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Video
        style={{width: '100%', height: '80%'}}
        resizeMode="stretch"
        repeat
        source={{uri: 'https://ffs1.gulfsat.com/ALNAHAR_ALJADID/video.m3u8'}}
      />
    </View>
  );
};

export default Home;

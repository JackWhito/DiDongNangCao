import React from 'react';
import { ActivityIndicator, Image, ImageBackground } from 'react-native';
import { appColors } from '../constants/appColors';
import { appInfo } from '../constants/appInfos';
import { SpaceComponent } from '../components';

const SplashScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/img/splash-img.jpg')}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      imageStyle={{ flex: 1}}>
      <Image
        source={require('../assets/img/logo.png')}
        style={{
          width: appInfo.sizes.WIDTH * 0.7,
          resizeMode: 'contain',
        }}
        />
      <SpaceComponent height={16} />
      <ActivityIndicator color={appColors.gray} size={22} />
      </ImageBackground>
  );
};

export default SplashScreen;
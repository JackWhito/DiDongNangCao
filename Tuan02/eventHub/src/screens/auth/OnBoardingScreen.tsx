import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { globalStyles } from '../../styles/globalStyles';
import Swiper from 'react-native-swiper';
import { appColors } from '../../constants/appColors';
import { appInfo } from '../../constants/appInfos';

const OnBoardingScreen = ({navigation}:any) => {
    const [index, setIndex] = useState(0);
  return (
    <View style={globalStyles.container}>
        <Swiper
            style={{}}
            loop={false}
            onIndexChanged={num => setIndex(num)}
            index={index}
            activeDotColor={appColors.white}>
            <Image
                source={require('../../assets/img/onboarding1.jpg')}
                style={{
                    flex: 1,
                    width: appInfo.sizes.WIDTH,
                    height: appInfo.sizes.HEIGHT,
                    resizeMode: 'cover',
                }}
            />
            <Image
                source={require('../../assets/img/onboarding2.jpg')}
                style={{
                    flex: 1,
                    width: appInfo.sizes.WIDTH,
                    height: appInfo.sizes.HEIGHT,
                    resizeMode: 'cover',
                }}
            />
            <Image
                source={require('../../assets/img/onboarding3.jpg')}
                style={{
                    flex: 1,
                    width: appInfo.sizes.WIDTH,
                    height: appInfo.sizes.HEIGHT,
                    resizeMode: 'cover',
                }}
            />
            </Swiper>
            <View
                style={[
                    {
                        paddingHorizontal: 16,
                        paddingVertical: 20,
                        position: 'absolute',
                        bottom: 20,
                        right: 20,
                        left: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    },
                ]}>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={[styles.text]}>Skip</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => 
                        index < 2 ? setIndex(index + 1) : navigation.navigate('LoginScreen')
                    }>
                        <Text style={[styles.text]}>Next</Text>
                    </TouchableOpacity>
                </View>
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
    text: {
        color: appColors.white,
        fontSize: 16,
        fontWeight: '500',
    },
});
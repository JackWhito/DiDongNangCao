import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { LoginScreen, OnBoardingScreen } from '../screens';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
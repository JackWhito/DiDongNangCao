import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { EnterOTPScreen, ForgotPassword, LoginScreen, NewPasswordScreen, OnBoardingScreen } from '../screens';
import {RegisterScreen} from '../screens';
const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="EnterOTPScreen" component={EnterOTPScreen} />
      <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
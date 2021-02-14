// Author: Hugovidafe <hugo.vidal.ferre@gmail.com>
// ReactNativeSocialApp of Hugovidafe (c) 2021
// Created: 5/0/2021 8:23:23
// Modified: 0/0/2021 22:14:42

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

export default AuthStackScreens = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};

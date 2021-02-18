// Author: Hugovidafe <hugo.vidal.ferre@gmail.com>
// Omusi of Hugovidafe (c) 2021
// Created: 5/0/2021 8:23:23
// Modified: 4/1/2021 21:51:57

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

export default function AuthStackScreens() {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator headerMode="none">
      {/* TODO: Add titles for website! */}
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
}

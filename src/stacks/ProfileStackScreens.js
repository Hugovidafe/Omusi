// Author: Hugovidafe <hugo.vidal.ferre@gmail.com>
// Omusi of Hugovidafe (c) 2021
// Created: 0/0/2021 20:6:16
// Modified: 4/1/2021 21:51:52

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../screens/ProfileScreen';
import SettingsStackScreen from './SettingsStackScreens';

export default function ProfileStackScreens() {
  const ProfileStack = createStackNavigator();

  return (
    <ProfileStack.Navigator headerMode="none">
      {/* TODO: Add titles for website! */}
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="Settings" component={SettingsStackScreen} />
    </ProfileStack.Navigator>
  );
}

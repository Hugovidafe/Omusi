// Author: Hugovidafe <hugo.vidal.ferre@gmail.com>
// Omusi of Hugovidafe (c) 2021
// Created: 0/0/2021 20:6:16
// Modified: 0/0/2021 22:41:46

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../screens/ProfileScreen';
import SettingsStackScreen from './SettingsStackScreens';

export default ProfileStackScreens = () => {
  const ProfileStack = createStackNavigator();

  return (
    <ProfileStack.Navigator headerMode="none">
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="Settings" component={SettingsStackScreen} />
    </ProfileStack.Navigator>
  );
};

// Author: Hugovidafe <hugo.vidal.ferre@gmail.com>
// Omusi of Hugovidafe (c) 2021
// Created: 0/0/2021 22:40:53
// Modified: 4/1/2021 21:51:46

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SettingsScreen from '../screens/SettingsScreen';

export default function SettingsStackScreens() {
  const SettingsStack = createStackNavigator();

  return (
    <SettingsStack.Navigator headerMode="none">
      {/* TODO: Add titles for website! */}
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}

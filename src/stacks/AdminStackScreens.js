// Author: Hugovidafe <hugo.vidal.ferre@gmail.com>
// Omusi of Hugovidafe (c) 2021
// Created: 1/1/2021 7:58:2
// Modified: 4/1/2021 16:46:8

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AdminScreen from '../screens/AdminScreen';
import UsersScreen from '../screens/UsersScreen';

export default function AdminStackScreens() {
  const SettingsStack = createStackNavigator();

  return (
    <SettingsStack.Navigator headerMode="none">
      <SettingsStack.Screen name="Admin" component={AdminScreen} />
      <SettingsStack.Screen name="Users" component={UsersScreen} />
    </SettingsStack.Navigator>
  );
}

// Author: Hugovidafe <hugo.vidal.ferre@gmail.com>
// Omusi of Hugovidafe (c) 2021
// Created: 1/1/2021 7:58:2
// Modified: 1/1/2021 7:58:32

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AdminScreen from '../screens/AdminScreen';

export default AdminStackScreens = () => {
  const SettingsStack = createStackNavigator();

  return (
    <SettingsStack.Navigator headerMode="none">
      <SettingsStack.Screen name="Admin" component={AdminScreen} />
    </SettingsStack.Navigator>
  );
};

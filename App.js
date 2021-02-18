// Author: Hugovidafe <hugo.vidal.ferre@gmail.com>
// Omusi of Hugovidafe (c) 2021
// Created: 0/1/2021 21:56:34
// Modified: 4/1/2021 7:56:27

import React from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { UserProvider } from './src/context/UserContext';
import { FirebaseProvider } from './src/context/FirebaseContext';

import AppStackScreens from './src/stacks/AppStackScreens';

export default function App() {
  return (
    <FirebaseProvider>
      <UserProvider>
        <NavigationContainer>
          <AppStackScreens />
        </NavigationContainer>
      </UserProvider>
    </FirebaseProvider>
  );
}

AppRegistry.registerComponent('app', () => App);

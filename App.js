// Author: Hugovidafe <hugo.vidal.ferre@gmail.com>
// Omusi of Hugovidafe (c) 2021
// Created: 0/1/2021 21:56:34
// Modified: 4/2/2021 23:9:13

import React from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { FirebaseProvider } from './src/context/FirebaseContext';
import { DatabaseProvider } from './src/context/DatabaseContext';
import { UserProvider } from './src/context/UserContext';

import AppStackScreens from './src/stacks/AppStackScreens';

export default function App() {
  return (
    <FirebaseProvider>
      <DatabaseProvider>
        <UserProvider>
          <NavigationContainer>
            <AppStackScreens />
          </NavigationContainer>
        </UserProvider>
      </DatabaseProvider>
    </FirebaseProvider>
  );
}

AppRegistry.registerComponent('app', () => App);

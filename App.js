// Author: Hugovidafe <hugo.vidal.ferre@gmail.com>
// Omusi of Hugovidafe (c) 2021
// Created: 0/1/2021 21:56:34
// Modified: 0/1/2021 21:58:22

import React from 'react';
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

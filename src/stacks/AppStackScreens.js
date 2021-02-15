// Author: Hugovidafe <hugo.vidal.ferre@gmail.com>
// Omusi of Hugovidafe (c) 2021
// Created: 6/0/2021 0:21:53
// Modified: 0/0/2021 22:36:46

import React, { useContext, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { UserContext } from '../context/UserContext';
import { FirebaseContext } from '../context/FirebaseContext';

import MainStackScreens from './MainStackScreens';
import AuthStackScreens from './AuthStackScreens';

export default AppStackScreens = () => {
  const AppStack = createStackNavigator();
  const [user, setUser] = useContext(UserContext);
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    setTimeout(async () => {
      const user = firebase.getCurrentUser();

      if (user) {
        const userInfo = await firebase.getUserInfo(user.uid);

        setUser({
          uid: user.uid,
          email: userInfo.email,
          username: userInfo.username,
          profilePhotoUrl: userInfo.profilePhotoUrl,
        });
      } else setUser((state) => ({ ...state, uid: false }));
    });
  }, []);

  return (
    <AppStack.Navigator headerMode="none">
      {user.uid ? (
        <AppStack.Screen name="Main" component={MainStackScreens} />
      ) : (
        <AppStack.Screen name="Auth" component={AuthStackScreens} />
      )}
    </AppStack.Navigator>
  );
};

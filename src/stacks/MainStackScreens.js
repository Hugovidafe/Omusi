// Author: Hugovidafe <hugo.vidal.ferre@gmail.com>
// Omusi of Hugovidafe (c) 2021
// Created: 5/0/2021 17:13:59
// Modified: 1/1/2021 8:0:32

import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileStackScreens from '../stacks/ProfileStackScreens';
import AdminStackScreen from '../stacks/AdminStackScreens';

import { UserContext } from '../context/UserContext';

export default MainStackScreens = () => {
  const MainStack = createBottomTabNavigator();

  const [user, setUser] = useContext(UserContext);

  const tabBarOptions = {
    showLabel: false,
    showIcon: true,
    style: {
      height: 60,
    },
  };

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused }) => {
      let iconName;

      switch (route.name) {
        case 'Home':
          iconName = focused ? 'home' : 'home-outline';
          break;

        case 'Search':
          iconName = focused ? 'search' : 'search-outline';
          break;

        case 'Notification':
          iconName = focused ? 'notifications' : 'notifications-outline';
          break;

        case 'Admin':
          iconName = focused ? 'build' : 'build-outline';
          break;

        default:
          iconName = focused ? 'home' : 'home-outline';
          break;
      }

      if (route.name === 'Profile') {
        if (!focused)
          return (
            <ProfilePhotoContainer>
              <ProfilePhoto
                source={
                  user.ProfilePhotoUrl === 'default'
                    ? require('../../assets/icon.png')
                    : { uri: user.profilePhotoUrl }
                }
              />
            </ProfilePhotoContainer>
          );
        return (
          <ProfilePhotoContainer focused>
            <ProfilePhoto
              source={
                user.ProfilePhotoUrl === 'default'
                  ? require('../../assets/icon.png')
                  : { uri: user.profilePhotoUrl }
              }
            />
          </ProfilePhotoContainer>
        );
      }

      return <Ionicons name={iconName} size={24} color="black" />;
    },
  });

  return (
    <MainStack.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={screenOptions}>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="Search" component={SearchScreen} />
      <MainStack.Screen name="Notification" component={NotificationScreen} />
      <MainStack.Screen
        name="Profile"
        component={ProfileStackScreens}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('Profile', { screen: 'Profile' });
          },
          tabLongPress: (e) => {
            e.preventDefault();
            navigation.navigate('Profile', { screen: 'Settings' });
          },
        })}
      />
      {user.role == 'admin' ? (
        <MainStack.Screen name="Admin" component={AdminStackScreen} />
      ) : (
        ''
      )}
    </MainStack.Navigator>
  );
};

const ProfilePhotoContainer = styled.View`
  width: 33px;
  height: 33px;
  border-radius: 16.5px;
  border-width: 3px;
  border-color: ${(props) => (props.focused ? '#111111' : '#00000000')};
  justify-content: center;
  align-items: center;
`;

const ProfilePhoto = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;

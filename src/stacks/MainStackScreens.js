// Author: Hugovidafe <hugo.vidal.ferre@gmail.com>
// Omusi of Hugovidafe (c) 2021
// Created: 5/0/2021 17:13:59
// Modified: 2/1/2021 8:33:7

import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

import ContactsScreen from '../screens/ContactsScreen';
import MessageScreen from '../screens/MessageScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileStackScreens from '../stacks/ProfileStackScreens';

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
        case 'Contacts':
          iconName = focused ? 'person' : 'person-outline';
          break;

        case 'Message':
          iconName = focused ? 'chatbox' : 'chatbox-outline';
          break;

        case 'Notification':
          iconName = focused ? 'notifications' : 'notifications-outline';
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
      <MainStack.Screen name="Contacts" component={ContactsScreen} />
      <MainStack.Screen name="Message" component={MessageScreen} />
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

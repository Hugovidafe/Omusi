// Author: Hugovidafe <hugo.vidal.ferre@gmail.com>
// Omusi of Hugovidafe (c) 2021
// Created: 5/0/2021 17:12:51
// Modified: 4/1/2021 16:50:17

import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

import { UserContext } from '../context/UserContext';
import { FirebaseContext } from '../context/FirebaseContext';

import Header from '../components/Header';
import Text from '../components/Text';

export default function AdminScreen({ navigation }) {
  const [user, setUser] = useContext(UserContext);
  const firebase = useContext(FirebaseContext);

  const logOut = async () => {
    const loggedOut = await firebase;

    if (loggedOut) setUser((state) => ({ ...state, uid: false }));
  };

  return (
    <Container>
      <Header>
        <Text large light center>
          Administration
        </Text>
      </Header>

      <Settings>
        <SettingsCategory>
          <Text large>Users & roles</Text>
          <Setting onPress={() => navigation.navigate('Users')}>
            <Text medium>Users</Text>
            <MaterialIcons name="chevron-right" size={20} />
          </Setting>
          <Setting onPress={() => navigation.navigate('Roles')}>
            <Text medium>Roles</Text>
            <MaterialIcons name="chevron-right" size={20} />
          </Setting>
        </SettingsCategory>
        <SettingsCategory>
          <Text large>Music</Text>
          <Setting onPress={() => navigation.navigate('Albums')}>
            <Text medium>Albums</Text>
            <MaterialIcons name="chevron-right" size={20} />
          </Setting>
          <Setting onPress={() => navigation.navigate('Authors')}>
            <Text medium>Authors</Text>
            <MaterialIcons name="chevron-right" size={20} />
          </Setting>
        </SettingsCategory>
      </Settings>

      <StatusBar barStyle="dark-content" />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;

const Settings = styled.View`
  flex: 1;
  flex-direction: column;
`;

const SettingsCategory = styled.View`
  margin: 0px 10px 10px;
`;

const Setting = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px;
`;

const Footer = styled.View`
  margin-bottom: 32px;
`;

const Logout = styled.TouchableOpacity``;

const StatusBar = styled.StatusBar``;

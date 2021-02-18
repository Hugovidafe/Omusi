// Author: Hugovidafe <hugo.vidal.ferre@gmail.com>
// Omusi of Hugovidafe (c) 2021
// Created: 5/0/2021 17:12:51
// Modified: 4/1/2021 16:13:29

import React, { useContext } from 'react';
import styled from 'styled-components/native';

import { UserContext } from '../context/UserContext';
import { FirebaseContext } from '../context/FirebaseContext';

import Header from '../components/Header';
import Text from '../components/Text';

export default function SettingsScreen() {
  const [user, setUser] = useContext(UserContext);
  const firebase = useContext(FirebaseContext);

  const logOut = async () => {
    const loggedOut = await firebase.logOut();

    if (loggedOut) setUser((state) => ({ ...state, uid: false }));
  };

  return (
    <Container>
      <Header>
        <Text large light center>
          Settings
        </Text>
      </Header>

      <Settings>
        <SettingsCategory>
          <Text></Text>
          <Setting></Setting>
          <Setting></Setting>
        </SettingsCategory>
        <SettingsCategory>
          <Setting></Setting>
          <Setting></Setting>
        </SettingsCategory>
      </Settings>

      <Footer>
        <Logout onPress={logOut}>
          <Text medium bold color="#23a8d9">
            Log out
          </Text>
        </Logout>
      </Footer>
      <StatusBar barStyle="dark-content" />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const Settings = styled.FlatList`
  flex: 1;
`;

const SettingsCategory = styled.View``;

const Setting = styled.TouchableOpacity``;

const Footer = styled.View`
  margin-bottom: 32px;
`;

const Logout = styled.TouchableOpacity``;

const StatusBar = styled.StatusBar``;

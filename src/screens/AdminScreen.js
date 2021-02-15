// Author: Hugovidafe <hugo.vidal.ferre@gmail.com>
// Omusi of Hugovidafe (c) 2021
// Created: 5/0/2021 17:12:51
// Modified: 1/1/2021 8:4:34

import React, { useContext } from 'react';
import styled from 'styled-components';

import { UserContext } from '../context/UserContext';
import { FirebaseContext } from '../context/FirebaseContext';

import Header from '../components/Header';
import Text from '../components/Text';

export default AdminScreen = () => {
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
          Administration
        </Text>
      </Header>

      <Settings>
        <SettingsCategory>
          <Text large>Users</Text>
          <Setting>
            <Text>A</Text>
          </Setting>
          <Setting>
            <Text>B</Text>
          </Setting>
        </SettingsCategory>
        <SettingsCategory>
          <Text large>Music</Text>
          <Setting>
            <Text>C</Text>
          </Setting>
          <Setting>
            <Text>D</Text>
          </Setting>
        </SettingsCategory>
      </Settings>

      <StatusBar barStyle="dark-content" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  /* align-items: center; */
`;

const Settings = styled.View`
  flex: 1;
  flex-direction: column;
`;

const SettingsCategory = styled.View``;

const Setting = styled.TouchableOpacity`
  flex-direction: column;
`;

const Footer = styled.View`
  margin-bottom: 32px;
`;

const Logout = styled.TouchableOpacity``;

const StatusBar = styled.StatusBar``;

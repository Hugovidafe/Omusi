// Author: Hugovidafe <hugo.vidal.ferre@gmail.com>
// ReactNativeSocialApp of Hugovidafe (c) 2021
// Created: 5/0/2021 17:10:23
// Modified: 0/0/2021 11:21:36

import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';

import { UserContext } from '../context/UserContext';

import Header from '../components/Header';
import Text from '../components/Text';

export default ContactsScreen = () => {
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    setTimeout(async () => {});
  }, []);

  return (
    <Container>
      <Header>
        <Text large light center>
          Contacts
        </Text>
      </Header>

      {/* 'https://www.googleapis.com/auth/contacts.readonly' */}

      <StatusBar barStyle="dark-content" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const StatusBar = styled.StatusBar``;

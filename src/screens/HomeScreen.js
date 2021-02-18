// Author: Hugovidafe <hugo.vidal.ferre@gmail.com>
// Omusi of Hugovidafe (c) 2021
// Created: 5/0/2021 17:10:23
// Modified: 4/1/2021 16:12:43

import React, { useEffect, useContext } from 'react';
import styled from 'styled-components/native';

import { UserContext } from '../context/UserContext';

import Header from '../components/Header';
import Text from '../components/Text';

export default function HomeScreen() {
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    setTimeout(async () => {});
  }, []);

  return (
    <Container>
      <Header>
        <Text large light center>
          Home
        </Text>
      </Header>

      {/* 'https://www.googleapis.com/auth/contacts.readonly' */}

      <StatusBar barStyle="dark-content" />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;

const StatusBar = styled.StatusBar``;

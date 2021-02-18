// Author: Hugovidafe <hugo.vidal.ferre@gmail.com>
// Omusi of Hugovidafe (c) 2021
// Created: 4/1/2021 16:41:9
// Modified: 4/1/2021 16:45:46

import React from 'react';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

import { UserContext } from '../context/UserContext';
import { FirebaseContext } from '../context/FirebaseContext';

import Header from '../components/Header';
import Text from '../components/Text';

export default function UsersScreen() {
  return (
    <Container>
      <Header>
        <Text large light center>
          Users
        </Text>
      </Header>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;

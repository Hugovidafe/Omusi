// Author: Hugovidafe <hugo.vidal.ferre@gmail.com>
// Omusi of Hugovidafe (c) 2021
// Created: 5/0/2021 17:11:27
// Modified: 4/1/2021 16:13:21

import React from 'react';
import styled from 'styled-components/native';

import Header from '../components/Header';
import Text from '../components/Text';

export default function SearchScreen() {
  return (
    <Container>
      <Header>
        <Text large light center>
          Search
        </Text>
      </Header>

      <StatusBar barStyle="dark-content" />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;

const StatusBar = styled.StatusBar``;

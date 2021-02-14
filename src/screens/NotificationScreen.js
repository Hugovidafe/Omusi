// Author: Hugovidafe <hugo.vidal.ferre@gmail.com>
// ReactNativeSocialApp of Hugovidafe (c) 2021
// Created: 5/0/2021 17:12:16
// Modified: 6/0/2021 17:27:26

import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Text from '../components/Text';

export default NotificationScreen = () => {
  return (
    <Container>
      <Header>
        <Text large light center>
          Notifications
        </Text>
      </Header>

      <StatusBar barStyle="dark-content" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const StatusBar = styled.StatusBar``;
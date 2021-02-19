// Author: Hugovidafe <hugo.vidal.ferre@gmail.com>
// Omusi of Hugovidafe (c) 2021
// Created: 4/1/2021 16:41:9
// Modified: 4/1/2021 23:34:2

import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

import { UserContext } from '../context/UserContext';
import { FirebaseContext } from '../context/FirebaseContext';

import Header from '../components/Header';
import Text from '../components/Text';

export default function UsersScreen({ navigation }) {
  const [users, setUsers] = useState();
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    setTimeout(async () => {
      setUsers(await firebase.getAllUsers());
    });
  }, []);

  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const renderUser = ({ item: user }) => {
    return (
      <UserContainer /* onPress={() => navigation.navigate()} */>
        <UserProfilePhoto source={{ uri: user.profilePhotoUrl }} />
        <UserInfo>
          <Text medium>{capitalize(user.username)}</Text>
          <Text small>{user.email.toLowerCase()}</Text>
        </UserInfo>
        <MaterialIcons name="chevron-right" size={25} />
      </UserContainer>
    );
  };

  return (
    <Container>
      <Header>
        <Text large light center>
          Users
        </Text>
      </Header>
      {/* TODO: Add users flatlist! */}
      <UsersContainer
        data={users}
        renderItem={renderUser}
        keyExtractor={(user) => user.id.toString()}
      />

      <StatusBar barStyle="dark-content" />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;

const UsersContainer = styled.FlatList``;

const UserContainer = styled.TouchableOpacity`
  margin: 16px 16px 0 16px;
  background-color: #ffffff;
  border-radius: 6px;
  padding: 8px;
  flex-direction: row;
  align-items: center;
`;

const UserProfilePhoto = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;

const UserInfo = styled.View`
  flex: 1;
  margin: 0 16px;
`;

const StatusBar = styled.StatusBar``;

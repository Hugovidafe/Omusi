// Author: Hugovidafe <hugo.vidal.ferre@gmail.com>
// ReactNativeSocialApp of Hugovidafe (c) 2021
// Created: 5/0/2021 17:13:15
// Modified: 0/0/2021 22:39:10

import React, { useContext } from 'react';
import styled from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';

import { UserContext } from '../context/UserContext';
import { FirebaseContext } from '../context/FirebaseContext';

import Header from '../components/Header';
import Text from '../components/Text';

export default ProfileScreen = ({ navigation }) => {
  const [user, setUser] = useContext(UserContext);
  const firebase = useContext(FirebaseContext);

  return (
    <Container>
      <Header>
        <Text large light center>
          Profile
        </Text>
      </Header>

      <ProfilePhotoContainer>
        <ProfilePhoto
          source={
            user.ProfilePhotoUrl === 'default'
              ? require('../../assets/icon.png')
              : { uri: user.profilePhotoUrl }
          }
        />
      </ProfilePhotoContainer>

      <Text large bold margin="16px 0 32px 0">
        {user.username}
      </Text>

      <StatsContainer>
        <StatContainer>
          <Text large light>
            21
          </Text>
          <Text small bold color="#c2c4cd">
            Posts
          </Text>
        </StatContainer>
        <StatContainer>
          <Text large light>
            981
          </Text>
          <Text small bold color="#c2c4cd">
            Followers
          </Text>
        </StatContainer>
        <StatContainer>
          <Text large light>
            63
          </Text>
          <Text small bold color="#c2c4cd">
            Following
          </Text>
        </StatContainer>
      </StatsContainer>

      <Footer>
        <Settings onPress={() => navigation.navigate('Settings')}>
          {/* <MaterialIcons name='settings' /> */}
          <Text medium bold color="#23a8d9">
            Settings
          </Text>
        </Settings>
      </Footer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const ProfilePhotoContainer = styled.View``;

const ProfilePhoto = styled.Image`
  width: 128px;
  height: 128px;
  border-radius: 64px;
`;

const StatsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 32px;
  flex: 1;
`;

const StatContainer = styled.View`
  align-items: center;
  flex: 1;
`;

const Footer = styled.View`
  margin-bottom: 32px;
`;

const Settings = styled.TouchableOpacity``;
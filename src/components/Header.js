// Author: Hugovidafe <hugo.vidal.ferre@gmail.com>
// RNTestChatApp of Hugovidafe (c) 2021
// Created: 6/0/2021 17:25:36
// Modified: 4/1/2021 16:7:11

import React from 'react';
import styled from 'styled-components/native';

import Text from '../components/Text';

export default function HeaderStyle({ ...props }) {
  return <Header {...props}>{props.children}</Header>;
}

const Header = styled.View`
  flex-direction: row;
  width: 100%;
  height: 64px;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 0 8px;
  margin-bottom: 16px;
`;

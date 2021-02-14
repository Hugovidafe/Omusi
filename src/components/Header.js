// Author: Hugovidafe <hugo.vidal.ferre@gmail.com>
// Omusi of Hugovidafe (c) 2021
// Created: 6/0/2021 17:25:36
// Modified: 6/0/2021 17:26:48

import React from 'react';
import styled from 'styled-components/native';

export default HeaderStyle = ({ ...props }) => {
  return <Header {...props}>{props.children}</Header>;
};

const Header = styled.View`
  width: 100%;
  height: 64px;
  justify-content: center;
  background-color: #ffffff;
  margin-bottom: 16px;
`;

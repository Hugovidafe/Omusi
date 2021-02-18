// Author: Hugovidafe <hugo.vidal.ferre@gmail.com>
// Omusi of Hugovidafe (c) 2021
// Created: 6/0/2021 0:49:32
// Modified: 4/1/2021 16:34:18

import React, { useState, createContext } from 'react';

const UserContext = createContext([{}, () => {}]);

const UserProvider = (props) => {
  const [state, setState] = useState({
    uid: null,
    username: '',
    email: '',
    profilePhotoUrl: 'default',
    role: '',
  });

  return (
    <UserContext.Provider value={[state, setState]}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

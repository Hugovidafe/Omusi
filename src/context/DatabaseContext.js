// Author: Hugovidafe <hugo.vidal.ferre@gmail.com>
// Omusi of Hugovidafe (c) 2021
// Created: 4/2/2021 22:34:11
// Modified: 6/2/2021 1:37:39

import React, { createContext } from 'react';

import mariadb from 'mariadb';

import config from '../config/database.js';

const DatabaseContext = createContext();

const query = (query, db, cb) => {
  const conn = mariadb.createConnection({ config, database: db });
  conn
    .then((conn) => {
      conn
        .query(query)
        .then((rows) => {
          cb = rows;
          return conn.end();
        })
        .catch((err) => {
          console.log('Error querying on database: ', err);
        });
    })
    .catch((err) => {
      console.log('Error connecting to database: ', err);
    });
};

const Database = {
  getAllUsers: async () => {
    query('SELECT * FROM users', 'omusi', (rows) => {
      console.log(rows);
    });
  },
};

const DatabaseProvider = (props) => {
  return (
    <DatabaseContext.Provider value={Database}>
      {props.children}
    </DatabaseContext.Provider>
  );
};

export { DatabaseContext, DatabaseProvider };

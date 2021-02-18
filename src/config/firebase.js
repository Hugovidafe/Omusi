// Author: Hugovidafe <hugo.vidal.ferre@gmail.com>
// Omusi of Hugovidafe (c) 2021
// Created: 6/0/2021 1:53:10
// Modified: 4/1/2021 18:7:23

import dotenv from 'dotenv';

dotenv.config();

export default {
  apiKey: process.env.FIREB_APIKEY,
  authDomain: `${process.env.FIREB_PROJECTID}.firebaseapp.com`,
  projectId: `${process.env.FIREB_PROJECTID}`,
  storageBucket: `${process.env.FIREB_PROJECTID}.appspot.com`,
  messagingSenderId: process.env.FIREB_MESSSENDERID,
  appId: process.env.FIREB_APPID,
};

// Author: Hugovidafe <hugo.vidal.ferre@gmail.com>
// Omusi of Hugovidafe (c) 2021
// Created: 5/0/2021 16:37:59
// Modified: 4/1/2021 23:49:55

import React, { createContext } from 'react';

import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

import config from '../config/firebase';

const FirebaseContext = createContext();

if (!firebase.apps.length) firebase.initializeApp(config);

const fs = firebase.firestore();
const db = firebase.database();

const Firebase = {
  getCurrentUser: () => {
    return firebase.auth().currentUser;
  },

  getAllUsers: async () => {
    const users = [];
    const usersRef = fs.collection('users');
    const snapshot = await usersRef.get();
    snapshot.forEach((doc) => {
      var data = doc.data();
      data.id = doc.id;
      users.push(data);
    });
    return users;
  },

  createUser: async (user) => {
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .catch((e) => {
          if (e.code === 'auth/email-already-in-use') {
            alert('That email address is already in use!');
          }

          if (e.code === 'auth/invalid-email') {
            alert('That email address is invalid!');
          }

          if (e.code === 'auth/weak-password') {
            alert('Your password must have at least 6 different characters!');
          }

          console.error(e);
        });
      const uid = Firebase.getCurrentUser().uid;

      let profilePhotoUrl = 'default';

      await fs.collection('users').doc(uid).set({
        username: user.username,
        email: user.email,
        profilePhotoUrl,
        role: user.role,
      });

      if (user.profilePhoto)
        profilePhotoUrl = await Firebase.uploadProfilePhoto(user.profilePhoto);

      delete user.password;

      alert(
        "User account created!\nWe're gonna redirect you in a few seconds!"
      );

      return { ...user, profilePhotoUrl, uid };
    } catch (error) {
      console.log('Error @createUser: ', error.message);
    }
  },

  uploadProfilePhoto: async (uri) => {
    const uid = Firebase.getCurrentUser().uid;

    try {
      const photo = await Firebase.getBlob(uri);

      const imageRef = firebase.storage().ref('profilePhotos').child(uid);
      await imageRef.put(photo);

      const url = await imageRef.getDownloadURL();

      await fs.collection('users').doc(uid).update({
        profilePhotoUrl: url,
      });

      return url;
    } catch (error) {
      console.log('Error @uploadProfilePhoto: ', error);
    }
  },

  getBlob: async (uri) => {
    return await new Promise((res, rej) => {
      const xhr = new XMLHttpRequest();

      xhr.onload = () => {
        res(xhr.response);
      };

      xhr.onerror = () => {
        rej(new TypeError('Network req failed.'));
      };

      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);
      xhr.send('null');
    });
  },

  getUserInfo: async (uid) => {
    try {
      const user = await fs.collection('users').doc(uid).get();

      if (user.exists) return user.data();
    } catch (error) {
      console.log('Error @getUserInfo: ', error);
    }
  },

  logOut: async () => {
    try {
      await firebase
        .auth()
        .signOut()
        .then(() => {
          alert('Logged out successfully!');
        });
      return true;
    } catch (error) {
      console.log('Error @logOut: ', error);
    }
    return false;
  },

  signIn: async (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },
};

const FirebaseProvider = (props) => {
  return (
    <FirebaseContext.Provider value={Firebase}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseContext, FirebaseProvider };

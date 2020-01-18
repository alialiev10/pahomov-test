import {uuid} from 'uuidv4';
import React from "react";


let token = '';


window.addEventListener('load', () => {
  token = getTokenFromLocalStorage();
  console.log(token);
});

const setTokenToLocalStorage = (token) => {
  localStorage.setItem('token', token);
};

const getTokenFromLocalStorage = () => {
  return localStorage.getItem('token');
};

const clearTokenFromLocalStorage = () => {
  setTokenToLocalStorage('');
  token = '';
  console.log(token);
};

const authorize = (email, password) => {
  // todo: replace mock with real backend call
  return new Promise((resolve) => {
    setTimeout(() => {
      const jwt = uuid();
      token = jwt;
      setTokenToLocalStorage(token);

      resolve({
        jwt,
      });
    },
      2500,
    );
  });
};

const authService = {
  authorize,
  token,
  clearTokenFromLocalStorage,
};

export default authService;

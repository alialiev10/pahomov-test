import {uuid} from 'uuidv4';
import React from "react";

const getTokenFromLocalStorage = () => {
  return localStorage.getItem('token');
};

let token = getTokenFromLocalStorage();

const setTokenToLocalStorage = (token) => {
  localStorage.setItem('token', token);
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

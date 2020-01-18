import {uuid} from 'uuidv4';
import React from "react";

const getTokenFromLocalStorage = () => {
  return localStorage.getItem('token');
};

const setTokenToLocalStorage = (token) => {
  localStorage.setItem('token', token);
};

const clearTokenFromLocalStorage = () => {
  setTokenToLocalStorage('');
};

const authorize = (email, password) => {
  // todo: replace mock with real backend call
  return new Promise((resolve) => {
    setTimeout(() => {
      const jwt = uuid();

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
  clearTokenFromLocalStorage,
  getTokenFromLocalStorage,
  setTokenToLocalStorage,
};

export default authService;

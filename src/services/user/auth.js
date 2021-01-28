import axios from '../axios/axios';

export const loginWithEmailAndPassword = (email, password) => {
  return new Promise((resolve, reject) => {
    axios.post('/users/auth/login', { email, password })
      .then(response => {
        window.localStorage.setItem('user', JSON.stringify(response.data));

        resolve(response);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const signUpWithEmailAndPassword = (name, email, password) => {
  return new Promise((resolve, reject) => {
    axios.post('/users/auth/signup', { name, email, password })
      .then(response => {
        window.localStorage.setItem('user', JSON.stringify(response.data));

        resolve(response);
      })
      .catch(err => {
        reject(err);
      })
  });
};
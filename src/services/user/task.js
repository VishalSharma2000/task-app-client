import { authAxios } from '../axios/authAxios';

export const fetchAllTasks = () => {
  return new Promise((resolve, reject) => {
    authAxios.get('/tasks/')
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err.response);
      })
  });
}; 
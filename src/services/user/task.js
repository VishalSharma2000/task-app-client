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

export const addNewTask = (task) => {
  return new Promise((resolve, reject) => {
    authAxios.post('/tasks/')
      .then(response => {
        console.log(response, 'Response after adding new task');
      })
      .catch(err => {
        console.log('Some error', err);
      })
  });
};
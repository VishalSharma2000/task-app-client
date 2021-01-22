import axios from 'axios';

const baseAPIUrl = "http://localhost:8000/";
export let authAxios;

export const setAuthAxios = (accessToken) => {
  authAxios = axios.create({
    baseURL: baseAPIUrl,
    headers: {
      Authorization: `Bearere ${accessToken}`
    },
  });

  return authAxios;
}


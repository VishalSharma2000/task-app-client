import axios from 'axios';

const baseAPIUrl = "http://localhost:8000/";
export let authAxios;

const setAuthAxios = (accessToken) => {
  authAxios = axios.create({
    baseURL: baseAPIUrl,
    headers: {
      Authorization: `Bearere ${accessToken}`
    },
  });

  return authAxios;
}

export default setAuthAxios;


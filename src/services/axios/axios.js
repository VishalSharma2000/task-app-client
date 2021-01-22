import axios from 'axios';

const baseAPIUrl = "http://localhost:8000/";

export default axios.create({
  baseURL: baseAPIUrl,
})
import axios from 'axios';

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: 'https://sqlite3-test.herokuapp.com',
    headers: {
      Authorization: localStorage.getItem('token')
    }
  });
};
import axios from 'axios';

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: 'https://bw-testing.herokuapp.com',
    headers: {
      Authorization: localStorage.getItem('token')
    }
  });
};
import axios from 'axios';

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: 'https://backendci-disneyparents.herokuapp.com',
    headers: {
      Authorization: localStorage.getItem('token')
    }
  });
};
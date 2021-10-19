import axios from 'axios';

const randomUserApi = axios.create({
  baseURL: 'https://randomuser.me',
});

export default randomUserApi;

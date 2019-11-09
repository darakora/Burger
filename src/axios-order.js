import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://react-my-burger-b4518.firebaseio.com/'
});

export default instance;
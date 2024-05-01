import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    // headers: {'X-Custom-Header': 'foobar'}
});

  export default instance
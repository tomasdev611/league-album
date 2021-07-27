import axios from 'axios';

const ApiService = (() => {
  const instancce = axios.create({
    withCredentials: true,
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  const getInstance = () => instancce;

  return { getInstance };
})();

export default ApiService;
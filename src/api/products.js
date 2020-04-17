import axios from 'axios';

export default {
  getProducts(cb) {
    return axios
      .get('/data/shop-items.json')
      .then((response) => cb(response.data.items))
      .catch((error) => console.error('Fetch data error', error));
  },
};

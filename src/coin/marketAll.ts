import axios from 'axios';

const URL: string = 'https://api.upbit.com/v1/market/all';

const marketAll = () => {
  axios
    .get(URL)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.error(err));
};

export { marketAll };

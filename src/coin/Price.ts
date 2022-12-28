import axios from 'axios';

const URL = (name: string) => `https://api.upbit.com/v1/ticker?markets=${name}`;
// res.data[0].trade_price

const Price = async (name: string) => {
  try {
    const response = await axios.get(URL(name));
    return response.data[0].trade_price;
  } catch (error) {
    console.log(error);
  }
};
let currentPrice = Price('KRW-BTC');
export { Price, currentPrice };

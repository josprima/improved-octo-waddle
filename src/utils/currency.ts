import currency from 'currency.js';

const format = (value: number): string => {
  return currency(value, {
    precision: 0,
  }).format({
    symbol: '',
  });
};

export default format;

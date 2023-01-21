const DICTIONARY = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';

const generateRandomOrderID = () => {
  let generatedOrderID = '';

  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * DICTIONARY.length);
    generatedOrderID += DICTIONARY[randomIndex];
  }

  return generatedOrderID;
};

export default generateRandomOrderID;

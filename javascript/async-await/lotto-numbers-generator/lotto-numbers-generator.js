const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

const generateLottoNumber = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(generateRandomNumber(1, 60));
    }, 1000)
  });
};

export const generateLottoNumbers = async (n) => {
  const generateLottoNumberPromises = [];

  for (let i = 0; i < n; i++) {
    const generateLottoNumberPromise = generateLottoNumber();
    generateLottoNumberPromises.push(generateLottoNumberPromise);
  }

  return await Promise.all(generateLottoNumberPromises);
};
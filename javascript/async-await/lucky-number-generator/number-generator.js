const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

export const generateLuckyNumber = (min, max, timeout = 2500) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const number = generateRandomNumber(min, max);

      if (number < 5) {
        reject(new Error("Generated number is too small."));
      }

      resolve(number);
    }, timeout)
  })
};
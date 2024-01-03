export const addLuckyNumber = (number) => {
  document.querySelector('section').innerHTML = `
    <p>The lucky number is: ${number}</p>
  `;
};

export const addError = () => {
  document.querySelector('section').innerHTML = `
    <p>The number was unlucky.</p>
  `;
};

export const addLoading = () => {
  document.querySelector('section').innerHTML = `
    <p>Loading...</p>
  `;
}
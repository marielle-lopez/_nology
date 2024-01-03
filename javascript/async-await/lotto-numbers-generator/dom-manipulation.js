export const addLottoNumbers = (numbers) => {
  document.querySelector('section').innerHTML = `
    <p>Your lotto numbers are: ${numbers}</p>
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
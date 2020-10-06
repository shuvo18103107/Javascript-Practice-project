const form = document.querySelector('#signup-form');

const creditcardInput = document.querySelector('#cc');
const termCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

const formdata = {};

for (let input of [creditcardInput, termCheckbox, veggieSelect]) {
  input.addEventListener('input', ({ target }) => {
    const { name, type, value, checked } = target;
    formdata[name] = type === 'checkbox' ? checked : value;
    console.log(formdata);
  });
}

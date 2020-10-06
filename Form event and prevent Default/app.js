const form = document.querySelector('#signup-form');

const creditcardInput = document.querySelector('#cc');
const termCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

form.addEventListener('submit', function (e) {
  alert('Submitted the form!');
  e.preventDefault();
  console.log('cc', creditcardInput.value);
  console.log('terms', termCheckbox.checked);
  console.log('veggie', veggieSelect.value);
  // we can  send form data to database
  // we can append something to page using form data
});

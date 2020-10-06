const additeminput = document.querySelector('#additem');
const itemsul = document.querySelector('#items');
additeminput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    //add new item
    const newitemtext = this.value;
    const newitem = document.createElement('li');
    newitem.innerText = newitemtext;
    itemsul.appendChild(newitem);
    this.value = '';
  }
});

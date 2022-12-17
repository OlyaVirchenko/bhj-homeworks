const loader = document.querySelector('.loader');
const requestURL = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';


load(requestURL, addElement);

function load(url, callback) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', url, true);

  xhr.responseType = '';

  xhr.send();
  xhr.onload = function () {
    if (xhr.status != 200) {
      alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    } else {
      return callback(JSON.parse(xhr.response));
    }
  };
}

function addElement(...args) {
  const items = document.querySelector('#items');
  const divItem = document.createElement('div');
  const divItemCode = document.createElement('div');
  const divItemValue = document.createElement('div');
  const divItemCurency = document.createElement('div');

  divItem.classList.add('item');
  divItemCode.classList.add('item__code');
  divItemValue.classList.add('item__value');
  divItemCurency.classList.add('item__currency');

  divItemCode.innerText = args[0];
  divItemValue.innerText = args[1];
  divItemCurency.innerText = 'руб.';

  items.appendChild(divItem);
  divItem.appendChild(divItemCode);
  divItem.appendChild(divItemValue);
  divItem.appendChild(divItemCurency);

   loader.classList.remove('loader_active');
}



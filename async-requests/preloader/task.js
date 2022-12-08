const loader = document.querySelector('.loader');
const requestURL = 'https://netology-slow-rest.herokuapp.com/upload.php';


load(addElement);


function load(callback) {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', requestURL)

	xhr.onload = () => {
		callback(JSON.parse(xhr.response))
	}

	xhr.responseType = 'json';

	xhr.onload = () => {
		if (xhr.status != 200) {
			alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); 
		} else {
        	return callback(xhr.response);
		}
	}
	xhr.send();
}



function addElement(...args) {
	const items = document.querySelector('#items');

	let divItem = document.createElement('div');
	let itemCode = document.createElement('div');
	let itemValue = document.createElement('div');
	let itemCurrency = document.createElement('div');

	divItem.classList.add('item');
	itemCode.classList.add('item__code');
	itemValue.classList.add('item__value');
	itemCurrency.classList.add('item__currency');

	itemCode.innerText = args[0];
    itemValue.innerText = args[1];
    itemCurency.innerText = 'руб.';

    items.appendChild(divItem);
    divItem.appendChild(itemCode);
    divItem.appendChild(itemValue);
    divItem.appendChild(itemCurency);

    loader.classList.remove('loader_active');
}


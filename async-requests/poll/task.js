const requestURL = 'https://students.netoservices.ru/nestjs-backend/poll';


loaderGet(addElement);



function loaderGet(callback) {
	const xhr = new XMLHttpRequest();

	xhr.open('GET', requestURL);

	xhr.responseType = '';

	xhr.onload = function () {
    if (xhr.status != 200) {
      alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    } else {
      return callback(JSON.parse(xhr.response));
    }
  };
  xhr.send();
 }

function addElement(...args) {
	

	const pollTitle = document.querySelector('.poll__title');
	const pollAnswers = document.querySelector('poll__answers');
	let button = document.createElement('button');
	//let button = document.createElement('button');

	button.classList.add('poll__answer');
	button.classList.add('poll__answer');

	pollTitle.innerText = args[0];
    button.innerText = args[1];
    //button.innerText = args[1];

    pollAnswers.appendChild(button);
   // button.appendChild(button);
}


const chosenButton = document.querySelector('.button');

chosenButton.onclick = function() {
	alert('Спасибо, ваш голос засчитан!');
}

















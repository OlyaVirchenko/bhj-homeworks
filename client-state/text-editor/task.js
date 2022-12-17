const textArea = document.querySelector('#editor');
const button = document.querySelector('#button');

enterText('text', textArea);

function saveText (key, value) {
	localStorage.setItem(key, value);
}

window.addEventListener('unload', el => {
	saveText('text', textArea.value);
});

button.addEventListener('click', el => {
	el.preventDefault();
	textArea.value = '';
	saveText('text', textArea.value);
});

function enterText(keyname, element) {
  let cash = localStorage.getItem(keyname);
}


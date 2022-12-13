const textArea = document.querySelector('#editor');
const button = document.querySelector('#button');

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



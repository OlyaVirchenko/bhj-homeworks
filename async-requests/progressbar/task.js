const progress = document.getElementById( 'progress' );
const button = document.getElementById('send');
const file = document.querySelector('#file');

function upload(file, url) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', url);

	xhr.upload.onprogress = el => (progress.value = el.loaded / el.total);
	xhr.upload.onload () => (alert('Документ загружен'))
	xhr.send(file)
}

button.addEventListener('click', el => {
	el.preventDefault();
	for let(i = 0; i < file.files.length; i += 1) {
		upload(file.files[i], 'https://netology-slow-rest.herokuapp.com/upload.php');
	}
})

let formData = new FormData();

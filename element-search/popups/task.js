const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const btnMain = document.querySelector('#modal_main .btn')

const closeButton = document.querySelectorAll('.modal__close');


modalMain.classList.add('modal_active');

btnMain.onclick = (() => {
	modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active'); 
});

closeButton.onclick = (() => {
	modalMain.classList.remove('modal_active');
    modalSuccess.classList.remove('modal_active');
});



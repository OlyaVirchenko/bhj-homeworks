const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownLink = document.querySelectorAll('.dropdown__link');

dropdownValue.addEventListener('click', () => 
	dropdownList.classList.add('dropdown__list_active')
);

dropdownLink.forEach(link => 
	link.addEventListener('click', dropdownChange)
)

function dropdownChange(el) {
	dropdownValue.textContent = el.target.textContent;
	dropdownList.classList.remove('dropdown__list_active');
	el.preventDefault()
}



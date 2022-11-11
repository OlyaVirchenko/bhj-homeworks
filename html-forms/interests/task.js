const interest = Array.from(document.querySelectorAll('.interest__check'));

interest.forEach((el) => {
	el.addEventListener('click', element => checkboxMain(element))
});


function checkboxMain(el) {
	if (el.currentTarget.checked) {
		Array.from(el.currentTarget.closest('.interest').querySelectorAll('ul .interest__check')).forEach((item) => (item.checked = true));
	} else if (!el.currentTarget.checked) {
		Array.from(el.currentTarget.closest('.interest').querySelectorAll('ul .interest__check')).forEach((item) => (item.checked = false));
	}

}



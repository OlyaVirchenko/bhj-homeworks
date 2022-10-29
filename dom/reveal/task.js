const reveals = [...document.querySelectorAll('.reveal')];

window.addEventListener('scroll', isVisible)


function isVisible() {
	for (let el of reveals){
		if (el.getBoundingClientRect().bottom <= 600){
			el.classList.add('reveal_active')
		}
	}	
}
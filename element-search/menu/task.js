
const menuList = document.querySeltctorAll('.menu_sub');

const menuLink = Array.from(document.querySeltctorAll('.menu__link'));
const menuItem = document.querySelectorAll('.menu__item');
const linkMenu = document.getElementByClassName('menu__link')

linkMenu.forEach(link => {
	link.onclick = () => {
		link.closest('.menu__item').querySeltctorAll('.menu_sub').forEach(item => item.classList.remove('menu_active'));
        link.closest('.menu__item').querySeltctorAll('.menu').classList.add('menu_active');
	}
	return false;
})


	



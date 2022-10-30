const menuLink = document.querySelectorAll('.menu__link');
const menuSub = document.querySelector('.menu_sub')

/*menuLink.forEach(link => {
	link.onclick = () => {
        link.closest('.menu__item').querySelector('.menu').classList.add('menu_active');
        return false;
	}
})*/

menuLink.forEach((link) => {
  link.onclick = () => {
  	
      link.closest('.menu_main').querySelectorAll('.menu_sub').forEach((item) => item.classList.remove('menu_active'));
      link.closest('.menu__item').querySelector('.menu').classList.add('menu_active');

    return false;
  };
});





const menuLink = document.querySelectorAll('.menu__link');
const menuSub = document.querySelector('.menu_sub')

menuLink.forEach(link => {
	link.onclick = () => {
        link.closest('.menu__item').querySelector('.menu').classList.add('menu_active');
        return false;
	}
})

/*
menuLink.onclick = function() {
	menuLink.closest('.menu_sub').classList.add('menu_active');
}
for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].onclick = function()  {
  	menuLink[i].closest('.menu_sub').classList.add('menu_active');
    
  };
  return false;

}


for (let i = 0; i < menuLink.length; i++) {
	menuLink.onclick = function() {
		menuLink[i].closest('.menu_sub').classList.add('menu_active')
		return false;
	}
}*/




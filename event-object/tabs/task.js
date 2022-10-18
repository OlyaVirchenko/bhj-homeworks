const tabList = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');
const tab =document.querySelector('.tabs')

tab.addEventListener('click', (e) => {
		activeContent(e.target, tabList, tabContent)	
});


function activeContent(el, arr1, arr2) {
	arr1.forEach(element => element.classList.remove('tab_active'));
	arr2.forEach(element => element.classList.remove('tab__content_active'));
	el.classList.add('tab_active');
	arr2[Array.from(arr1).indexOf(el)].classList.add('tab__content_active');
}


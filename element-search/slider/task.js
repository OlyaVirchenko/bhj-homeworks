const sliderItem = Array.from(document.querySelectorAll('.slider__item'));
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
let index = 0;
 
next.onclick = (() => {
	index === sliderItem.length - 1 ? slider(index = 0) : slider(index += 1)
});


prev.onclick = (() => {
	index === 0 ? slider(index = sliderItem.length - 1) : slider(index -= 1)
});

function slider(index) {
	
		sliderItem.forEach(item => item.classList.remove('slider__item_active'));
		sliderItem[index].classList.add('slider__item_active');
	
}
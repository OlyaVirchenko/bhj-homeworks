const reveals = document.getElementsByClassName("reveal");

document.addEventListener('scroll', function() {
  for (let reveal of reveals) {
    const { innerHeight } = window;
		const { top } = reveal.getBoundingClientRect();
    if (top < innerHeight && top > 0) {
      reveal.classList.add("reveal_active");
    } else {
      reveal.classList.remove("reveal_active");
    }
  } 
});




/*const reveals = [...document.querySelectorAll('.reveal')];

window.addEventListener('scroll', isVisible)


function isVisible() {
	for (let el of reveals){
		if (el.getBoundingClientRect().bottom <= 600){
			el.classList.add('reveal_active')
		}
	}	
}*/
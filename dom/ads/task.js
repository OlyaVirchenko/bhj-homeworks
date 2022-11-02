const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
let time;
let timerId;
let index = 0;

rotator()

function rotator() {		 
	if (index === 0) {
        rotatorCase[rotatorCase.length - 1].classList.remove('rotator__case_active');
	    rotatorCase[0].classList.add('rotator__case_active');
	    rotatorCase[index].style.color = rotatorCase[index].dataset.color;

	} else if (index != 0) {		    		
	    rotatorCase[index - 1].classList.remove('rotator__case_active');
     	rotatorCase[index].classList.add('rotator__case_active');
     	rotatorCase[index].style.color = rotatorCase[index].dataset.color;
	}

    time = rotatorCase[index].dataset.speed;
    index === rotatorCase.length - 1 ? (index = 0) : (index += 1);
    
    timerId = setTimeout(rotator, time);
}; 

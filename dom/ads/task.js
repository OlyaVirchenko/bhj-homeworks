const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
let counter = 0;
setInterval(rotator, 1000)

function rotator() {	
	for (let i = 0; i < rotatorCase.length; i += 1) {
		if (i === 0) {
			rotatorCase[rotatorCase.length - 1].classList.remove('rotator__case_active');
			rotatorCase[0].classList.add('rotator__case_active');
		} else if (i != 0) {
		    rotatorCase[i - 1].classList.remove('rotator__case_active');
     	    rotatorCase[i].classList.add('rotator__case_active');
	    }
    }
};

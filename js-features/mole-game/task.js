const dead = getElementById('dead');
let moles_dead = 0;

const lost = getElementById('lost');
let moles_lost = 0;


for (let i = 1; i < 10; i += 1) {
	document.getElementById('hole' + [i]).onclick = () => 
		checkHole(document.getElementById('hole' + [i]));

}


function checkHole(el) {
	if (el.className.includes('hole_has-mole')) {
	    moles_dead += 1;
	    dead.textContent = moles_dead;
    } else {
	    moles_lost += 1;
	    lost.textContent = moles_lost;
    }


    if (moles_lost === 5) {
        alert('Вы выиграли!')
        moles_lost = 0;
    } else if (moles_dead === 10) {
    	alert('Вы проиграли')
    	moles_dead = 0;
    }  
}




















const taskInput = document.querySelector('#task__input');
const taskList = document.querySelector('#tasks__list');
const button = document.querySelector('#tasks__add');

taskList.addEventListener('click', (e) => {
  removeTask(e.target);
});

button.addEventListener('click', (e) => {
  enterTask(taskInput);
  e.preventDefault();
});

taskInput.addEventListener('keydown', elem => {
	elem.preventDefault();
	if(elem.key === 'Enter') {
		enterTask(taskInput);
	} else {
		return;
	}	 
});

function enterTask(el) {
	let task = el.value.trim();

	if (task != '') {
		let taskBox = document.createElement('div')
		taskBox.classList.add('task');

		taskList.insertAdjacentElement('afterBegin', taskBox);

		taskBox.innerHTML = `<div class="task">
                               <div class="task__title">
                                ${task}
                               </div>
                               <a href="#" class="task__remove">&times;</a>
                             </div>`;
	}
	el.value = el.defaultValue;
}


function removeTask(e) {
  if (e === e.parentNode.querySelector('.task__remove')) {
    e.parentNode.remove();
  }
}
	












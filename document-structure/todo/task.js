const taskInput = document.querySelector('#task__input');
const taskList = document.querySelector('.tasks__list');
const removeBtn = document.querySelector('.task__remove');

taskInput.addEventListener('keydown', elem => {
	elem.preventDefault();
	if(elem.key === 'Enter') {
		enterTask(taskInput);
	}
	 elem.preventDefault();
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
	removeBtn.addEventListener('click', el => {
	el.remove();
  })	
}
	
removeTask(taskList)











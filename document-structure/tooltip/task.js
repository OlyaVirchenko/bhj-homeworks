const tooltip = Array.from(document.querySelectorAll('.has-tooltip'));


tooltip.forEach((elem) => {
  elem.addEventListener('click', (e) => {   
      addTooltip(e);
      e.preventDefault();
  });
});

function addTooltip(element) {
	element.preventDefault();
	let tooltipText = document.createElement('div');
	tooltipText.innerText = element.currentTarget.title;
	tooltipText.classList.add('tooltip');

	element.currentTarget.insertAdjacentElement('afterEnd', tooltipText);

	tooltipText.classList.add('tooltip_active');
}


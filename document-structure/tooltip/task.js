const tooltip = Array.from(document.querySelectorAll('.has-tooltip'));

window.addEventListener('scroll', () => {
  if (document.querySelector('.tooltip_active') != null) {
    coordinatTooltip(document.querySelector('.tooltip_active'));
  }
});

window.addEventListener('resize', () => {
  if (document.querySelector('.tooltip_active') != null) {
    coordinatTooltip(document.querySelector('.tooltip_active'));
  }
});

tooltip.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    if (document.querySelector('.tooltip') === null) {
      addTooltip(e);
      e.preventDefault();
      return;
    } else if (document.querySelector('.tooltip') != null) {
      if (e.currentTarget.nextSibling != document.querySelector('.tooltip')) {
        document.querySelector('.tooltip').remove();
        addTooltip(e);
        e.preventDefault();
      } else if (
        Array.from(e.currentTarget.nextSibling.classList).includes(
          'tooltip_active'
        )
      ) {
        e.currentTarget.nextSibling.remove();
        e.preventDefault();
      }
    }
  });
});


function addTooltip(element) {
	element.preventDefault();
	let tooltipText = document.createElement('div');
	tooltipText.innerText = element.currentTarget.title;
	tooltipText.classList.add('tooltip');
	tooltipText.dataset.position = 'top';

	element.currentTarget.insertAdjacentElement('afterEnd', tooltipText);

	tooltipText.classList.add('tooltip_active');
  coordinatTooltip(document.querySelector('.tooltip_active'));
}



function coordinatTooltip(toolTipElement) {
  let hasTooltip = toolTipElement.previousElementSibling;
  let windowWidt = document.documentElement.clientWidth;
  let windowHeight = document.documentElement.clientHeight;
  let coordinatX = hasTooltip.getBoundingClientRect().left;
  let coordinatY = hasTooltip.getBoundingClientRect().top;
  let coordinatRight = hasTooltip.getBoundingClientRect().right;
  let coordinatHeight = hasTooltip.getBoundingClientRect().height;
  let coordinatWIdth = hasTooltip.getBoundingClientRect().width;
  let widthtoolTipElement = toolTipElement.getBoundingClientRect().width;
  let heighttoolTipElement = toolTipElement.getBoundingClientRect().height;



  switch (toolTipElement.dataset.position) {

    case ('top'):
      if (coordinatY <= heighttoolTipElement) {
        toolTipElement.style.left = coordinatX + 'px';
        toolTipElement.style.top = coordinatY + coordinatHeight + 'px';
      } else {
        toolTipElement.style.left = coordinatX + 'px';
        toolTipElement.style.top = coordinatY - heighttoolTipElement + 'px';
      };
      break;

    case ('bottom'):
      if (windowHeight - coordinatY <= heighttoolTipElement) {
        toolTipElement.style.left = coordinatX + 'px';
        toolTipElement.style.top = coordinatY - heighttoolTipElement + 'px';
      } else {
        toolTipElement.style.left = coordinatX + 'px';
        toolTipElement.style.top = coordinatHeight + coordinatY + 'px';
      };
      break;

    case ('right'):
      if (windowWidt - coordinatRight <= widthtoolTipElement) {
        toolTipElement.style.left = coordinatX + 'px';
        toolTipElement.style.top = coordinatY + coordinatHeight + 'px';
      } else {
        toolTipElement.style.left = coordinatX + coordinatWIdth + 'px';
        toolTipElement.style.top = coordinatY + 'px';
      }
      break;

    case ('left'): 
      if (coordinatX <= widthtoolTipElement) {
        toolTipElement.style.left = coordinatX + 'px';
        toolTipElement.style.top = coordinatY + coordinatHeight + 'px';
      } else {
        toolTipElement.style.left = coordinatX - widthtoolTipElement + 'px';
        toolTipElement.style.top = coordinatY + 'px';
      }
  }
}
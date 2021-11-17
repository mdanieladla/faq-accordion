'use strict';

let contentToggle = document.querySelectorAll('.js-toggle');

const iconRotate = document.querySelectorAll('.js-icon');

function handleClick(ev) {
  let clicked = ev.currentTarget;
  const click = clicked.parentNode;
  for (let index = 0; index < iconRotate.length; index++) {
    if (clicked === iconRotate[index]) {
      contentToggle[index].classList.toggle('hidden');
      iconRotate[index].classList.toggle('icon-end');
    } else {
      contentToggle[index].classList.add('hidden');
    }
  }
}

for (const item of iconRotate) {
  item.addEventListener('click', handleClick);
}

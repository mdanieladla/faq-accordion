'use strict';

const questionBlock = document.querySelectorAll('.js-qb');

//console.log(questionBlock);

const iconRotate = document.querySelectorAll('.js-icon');
//console.log(iconRotate);

//cuando haga click en el bloque de preguntas, si la respuesta tiene la clase hidden se la quite y si no la tiene se la añada, a su vez rote el icono.

function handleClick(ev) {
  let clicked = ev.currentTarget;
  //console.log(clicked);
  const click = clicked.parentNode;
  console.log(click);
  for (let index = 0; index < iconRotate.length; index++) {
    if (clicked === iconRotate[index]) {
      questionBlock[index].classList.toggle('hidden');
      iconRotate[index].classList.toggle('icon-end');
    } else {
      iconRotate[index].classList.toggle('icon-end');
      //console.log(iconRotate[index]);
    }
  }
}

for (const item of iconRotate) {
  item.addEventListener('click', handleClick);
}

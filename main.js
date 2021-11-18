'use strict';
//traemos elementos de los bloques que contienen la pregunta y respuesta.
const questionBlock = document.querySelectorAll('.js-qb');

//traemos elementos de los iconos.
const iconRotate = document.querySelectorAll('.js-icon');

//traemos elementos de las preguntas.
const questions = document.querySelectorAll('.js-q');

//cuando haga click en el bloque de preguntas, si la respuesta tiene la clase hidden se la quite y si no la tiene se la añada, a su vez rote el icono.

function handleClick(ev) {
  let clicked = ev.currentTarget; //donde el usuario hace click que en este caso es el icono.
  const click = clicked.parentNode; //el contenedor padre del icono, el párrafo.
  for (let index = 0; index < iconRotate.length; index++) {
    if (clicked === iconRotate[index]) {
      questionBlock[index].classList.toggle('hidden');
      iconRotate[index].classList.toggle('icon-end');
      questions[index].classList.toggle('bold');
    }
  }
}

for (const item of iconRotate) {
  item.addEventListener('click', handleClick);
}

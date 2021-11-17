'use strict';

let contentToggle = document.querySelectorAll('.js-toggle');

function toggleParagraph() {
  let itemClass = this.parentNode.className; //itemClass hace referencia a donde hacemos click, en este caso es: skills__content skills__open js-skills.
  for (let index = 0; index < contentToggle.length; index++) {
    contentToggle[index].className = 'skills__content skills__close js-skills';
  }
  if (itemClass === 'skills__content skills__close js-skills') {
    this.parentNode.className = 'skills__content skills__open js-skills';
  }
}

pToggle.forEach((elemt) => {
  elemt.addEventListener('click', toggleParagraph);
});

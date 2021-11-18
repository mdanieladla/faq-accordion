# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript (ES6)

### What I learned

I have reinforced my knowledge in CSS and javascript.

To see how you can add code snippets, see below:

```html
<h1>
  Some HTML code I'm proud of because it has been a little difficult for me:
</h1>
```

```js
function handleClick(ev) {
  let clicked = ev.currentTarget;
  const click = clicked.parentNode;
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
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

- Javascript (ES6)
- CSS

## Author

- Website - [Daniela Darnea](https://mdanieladla.github.io/portfolio/)
- Frontend Mentor - [@mdanieladla](https://www.frontendmentor.io/profile/mdanieladla)

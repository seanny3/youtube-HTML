'use strict';

const more_comment = document.querySelector('.comments__container');
const popup = document.querySelector('.comments__popup')
const header = document.querySelector('.header');
more_comment.addEventListener('click',() => {
    header.style.display ="none";
    
    popup.classList.add('slideUp');
})

const quit_popup = document.querySelectorAll('.popup__metadata__right i')[1];
quit_popup.addEventListener('click', () => {
    header.style.display ="flex";
    popup.classList.remove('slideUp');
})


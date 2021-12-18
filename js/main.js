'use strict';

const more_comment = document.querySelector('.comments__container');
const popup = document.querySelector('.comments__popup')
const header = document.querySelector('.header');
const quit_popup = document.querySelectorAll('.popup__metadata__right i')[1];
const video_bottom = document.querySelector('.video__bottom');

more_comment.addEventListener('click',() => {
    header.classList.add('invisible');
    video_bottom.classList.add('unScroll');
    popup.classList.add('slideUp');
})

quit_popup.addEventListener('click', () => {
    header.classList.remove('invisible');
    video_bottom.classList.remove('unScroll');
    popup.classList.remove('slideUp');
})


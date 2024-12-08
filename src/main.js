'use strict';

import './index.html';
import './main.scss';


import header from './html/page-header.html';
import footer from './html/page-footer.html';
import poster1 from './html/first-poster.html';
import story from './html/story.html'
import capabilities from './html/capabilities.html';
import want from './html/want.html';

const app = document.getElementById('app');
app.innerHTML = `   
    ${poster1}
    ${header} 
    ${story}
    ${capabilities}
    ${want}
    ${footer}`;

   //навигационное меню
const root = document.documentElement;
const navToggle = document.querySelector("#js-navToggle");
navToggle.addEventListener("click", function () {
    root.classList.toggle("show-nav");
});

document.querySelector('.first-poster__link-scroll').addEventListener('click', function(event) {
    event.preventDefault(); 
    const targetId = this.getAttribute('href'); 
    const targetElement = document.querySelector(targetId); 

    targetElement.scrollIntoView({
        behavior: 'smooth' 
    });
});
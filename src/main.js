'use strict';

import './index.html';
import './main.scss';


import header from './html/page-header.html';
import footer from './html/page-footer.html';
import poster1 from './html/first-poster.html';
import story from './html/story.html'

const app = document.getElementById('app');
app.innerHTML = `   
    ${poster1}
    ${header} 
    ${story}
    ${footer}`;

   //навигационное меню
const root = document.documentElement;
const navToggle = document.querySelector("#js-navToggle");
navToggle.addEventListener("click", function () {
    root.classList.toggle("show-nav");
});
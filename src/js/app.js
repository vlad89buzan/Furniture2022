import * as flsFunctions from "./modules/functions.js";
import header from "./modules/header.js";
import {swiperHero} from "./modules/swiper-init.js";
import {swiperAdvantages} from "./modules/swiper-init.js";
import tabs from './modules/tabs2.js';
import scrollToTop from './modules/scrollUp.js';


window.addEventListener('DOMContentLoaded',()=>{
    flsFunctions.isWebp();
    header();
    swiperHero();
    swiperAdvantages();
    tabs(
        ".tabheader__item",
        ".tabcontent",
        ".tabheader__items",
        "tabheader__item--active"
    );
    scrollToTop(
        '.scrollUp',
        'scrollUp--active'
    );
});
















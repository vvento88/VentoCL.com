import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-item, .services'), '80%');
new RevealOnScroll($('.headline, .generic-content-container'), '60%');

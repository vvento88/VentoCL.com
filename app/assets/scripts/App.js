import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-item, .services'), '90%');
new RevealOnScroll($('.headline, .generic-content-container'), '75%');
new RevealOnScroll($('.about-me, .about-me__photo'), '60%');
var stickyHeader = new StickyHeader();
var modal = new Modal();

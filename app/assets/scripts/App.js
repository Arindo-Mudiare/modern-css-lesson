import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import LodashTesting from './modules/LodashTesting';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "86%");
new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();
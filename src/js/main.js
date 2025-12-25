// Connect styles.
import '../scss/main.scss';

import * as bodyScrollLock from 'body-scroll-lock';

// Sidebar menu.
const refsMenu = {
  openMenubutton: document.querySelector('.js-menu-open'),
  closeMenubutton: document.querySelector('.js-menu-close'),
  overlayMenu: document.querySelector('.js-menu'),
};

const toggleMenu = () => {
  const isMenuOpen =
    refsMenu.openMenubutton.getAttribute('aria-expanded') === 'true' || false;
  refsMenu.openMenubutton.setAttribute('aria-expanded', !isMenuOpen);
  refsMenu.overlayMenu.classList.toggle('is-open');

  const scrollLockMethod = !isMenuOpen
    ? 'disableBodyScroll'
    : 'enableBodyScroll';
  bodyScrollLock[scrollLockMethod](document.body);
};

refsMenu.openMenubutton.addEventListener('click', toggleMenu);
refsMenu.closeMenubutton.addEventListener('click', toggleMenu);

// Close the mobile menu on wider screens if the device orientation changes.
window.matchMedia('(min-width: 1200px)').addEventListener('change', event => {
  if (!event.matches) return;

  refsMenu.overlayMenu.classList.remove('is-open');
  refsMenu.openMenubutton.setAttribute('aria-expanded', false);
  bodyScrollLock.enableBodyScroll(document.body);
});

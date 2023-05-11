import React from 'react';
import arrow from '../assets/arrow.png';
import disArrow from '../assets/dis-arrow.png';

export default function HideShowMenu() {
  function hideMenu() {
    const navContainer = document.querySelector('#navbar');
    const showArrow = document.querySelector('#show-arrow');
    const hideArrow = document.querySelector('#hide-arrow');
    if (navContainer.classList.contains('active-navbar')) {
      navContainer.classList.remove('active-navbar');
      navContainer.style.display = 'none';
      hideArrow.style.display = 'block';
      showArrow.style.display = 'none';
    } else {
      navContainer.classList.add('active-navbar');
      navContainer.style.display = 'flex';
      hideArrow.style.display = 'none';
      showArrow.style.display = 'block';
    }
  }
  return (
    <button type="button" onClick={hideMenu} className="back-btn hide-show-menu-btn">
      <img id="show-arrow" src={arrow} className="arrow-img" alt="arrow" />
      <img id="hide-arrow" src={disArrow} className="arrow-img" alt="arrow" />
    </button>
  );
}

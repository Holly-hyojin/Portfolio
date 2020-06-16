'use strict';

// make navbar trasparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  // console.log(window.scrollY);
  // console.log(`navbarHeight: ${navbarHeight}`); height 이 얼만큼인지 알아볼 수 있음
  if (window.scrollY > navbarHeight) {
    //navbar높이만큼 스크롤이 되면 클래스 추가 or 뺴기, 클래스 효과를 css에서 정해둠
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

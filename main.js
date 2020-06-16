'use strict';

// Make navbar trasparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  // console.log(window.scrollY); 콘솔창으로 되는지 체크하면서
  // console.log(`navbarHeight: ${navbarHeight}`); height 이 얼만큼인지 알아볼 수 있음
  if (window.scrollY > navbarHeight) {
    //navbar높이만큼 스크롤이 되면 클래스 추가 or 뺴기, 클래스 효과를 css에서 정해둠
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// Handle scrolling when tapping on the navbar menu

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  // console.log(event.target); click한게 무엇인지 확인
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return; //null 일 때는 아무것도 하지 않고 null일때만 아래의 콘솔이 실행
  }
  // console.log(event.target.dataset.link);
  scrollIntoView(link);
});

// Handle click on 'contact Me' button

const contactMe = document.querySelector('.home__contact');
contactMe.addEventListener('click', () => {
  scrollIntoView('#contact');
});

// Handle fade home when is scroll down
// Make home slowly fade to transparent as the window scrolls down

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  // console.log(homeHeight); height 이 얼만지 확인
  // console.log(1 - window.scrollY / homeHeight);
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// fade 내가 했던 것. 스무스하게 안되고 그냥 단일값을 줌
//const fadeHome = document.querySelector('#home');
// document.addEventListener('scroll', () => {
//   fadeHome.style.opacity = '0.5';
// });

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}

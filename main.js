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
  navbarMenu.classList.remove('open'); //토글메뉴에서 선택후 스크롤 될때 창이 닫히게
  // console.log(event.target.dataset.link);
  scrollIntoView(link);
});

// navbar toggle button
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
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

// Show arrow up button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

// Handle click arrow up button
arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});

// Project button click, filtering
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  // 앞의 값이 false면 뒤의 parentNode에서 받아오는 데이터를 쓰겠다는 것 (숫자 주는 category__count를 클릭해도 값 받아오기 위함)
  if (filter == null) {
    return; // filter값이 null이면 아무것도 안함
  }

  // change selecion when it clicked in my work button
  const active = document.querySelector('.category__btn.selected');
  if (active != null) {
    active.classList.remove('selected');
  }
  e.target.classList.add('selected');

  projectContainer.classList.add('anim-out'); //버튼이 클릭되면 클래스를 추가
  setTimeout(() => {
    //setTimeout은 브라우저에서 제공하는 api라서 위에 anim가 추가되고 0.3초후에 아래의 코드가 실행
    //애니메이션을 좀 더 자연스럽게 주기 위함
    projects.forEach((project) => {
      // console.log(project.dataset.type); 체크하기 위함
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300); //버튼 클릭하고 넘어갈 때 타임아웃을 주어서 0.3초 후에 사라지게
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}

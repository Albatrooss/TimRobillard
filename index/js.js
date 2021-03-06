// Elements

const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile');
const portDetailArrows = document.querySelectorAll('main section i');
const portDetails = document.querySelectorAll('main section div.deets');
const navLinks = document.querySelectorAll('header a');

//-----------------------

burger.addEventListener('click', toggleNav);
portDetails.forEach((x, i) => x.addEventListener('click', () => revealPortDetails(i)));
navLinks.forEach((x, i) => x.addEventListener('click', toggleNav));

//------------------------

function revealPortDetails(i) {
  portDetails[i].classList.toggle('details-showing');
  portDetails[i].parentElement.classList.toggle('expand-section');
  portDetailArrows[i].classList.toggle('flipped');
}

function toggleNav() {
  mobileMenu.classList.toggle('showing');
  burger.parentElement.classList.toggle('flipped')
}




// const emailIcon = document.getElementById('email-icon');
// const headerLogo = document.querySelector('#logo-bird');
// const headerLogoLeft = document.querySelector('#logo-left');
// const headerLogoRight = document.querySelector('#logo-right');

// let firstScroll = true;

// emailIcon.addEventListener('click', emailClick);

// function emailClick(e) {
//   e.preventDefault();
//   window.open(
//     'mailto:robillardtim@gmail.com?subject=' + escape('**ATTENTION** Sent from timrobillard.com'),
//     '_blank'
//   );
// }

// window.onload = function () {
//   setTimeout(() => pageScroll(), 1500)
//   console.log('loaded')
// }

// window.onscroll = function () {
//   if (window.scrollY <= 0) {
//     headerLogo.className = 'logo-on-load';
//     headerLogoLeft.classList.add('logo-bracket-on-load');
//     headerLogoRight.classList.add('logo-bracket-on-load');
//     firstScroll = true;
//   } else if (firstScroll) {
//     headerLogo.className = 'logo-scroll-out';
//     headerLogoLeft.classList.remove('logo-bracket-on-load');
//     headerLogoRight.classList.remove('logo-bracket-on-load');
//     setTimeout(() => {
//       headerLogo.className = 'header-logo-hidden';
//     }, 500);
//     firstScroll = false;
//   }
// };

// setTimeout(function () {
//   headerLogo.className = 'logo-on-load';
//   headerLogoLeft.classList.add('logo-bracket-on-load');
//   headerLogoRight.classList.add('logo-bracket-on-load');
// }, 0);


// function pageScroll() {
//   window.scrollBy(0, 5);
//   if (window.scrollY <= window.innerHeight) {
//     scrolldelay = setTimeout(pageScroll, 1);
//   }
// }

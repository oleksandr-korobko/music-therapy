// Open/Close Mobile Menu Logic

const openButton = document.querySelector('.my__open-button');
const closeButton = document.querySelector('.my__close-button')
const mobileMenu = document.querySelector('.my__mobile-menu');
const activityDirections = document.querySelector('.my__activity-directions');
const mobileMenuLogo= document.querySelector('.my__mobile-men--logo');

openButton.addEventListener('click', function(e) {
  mobileMenu.classList.remove('hidden');
});

closeButton.addEventListener('click', function(e) {
  mobileMenu.classList.add('hidden');
});

activityDirections.addEventListener('click', function(e){
  mobileMenu.classList.add('hidden');
});

mobileMenuLogo.addEventListener('click', function(e) {
  mobileMenu.classList.add('hidden');
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('.nav__wrapper');
  const nav = document.querySelector('.nav');
  
  if (window.innerWidth < 640) {  // для мобільних
    if (window.scrollY > 100) {
      header.classList.add('shadow');  // Tailwind класи
      nav.classList.add('py-2');  // Tailwind класи
    } else {
      header.classList.remove('shadow');
      nav.classList.remove('py-2');
    }
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const header = document.querySelector('.nav__wrapper');
    const headerHeight = header.offsetHeight;
    
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

window.addEventListener('load', function() {
  if (window.location.hash) {
    window.scrollTo(0, 0);
    
    const header = document.querySelector('.nav__wrapper');
    const headerHeight = header.offsetHeight;
    const targetElement = document.querySelector(window.location.hash);
    
    if (targetElement) {
      const rect = targetElement.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const absoluteTop = rect.top + scrollTop;
      
      const offset = window.innerWidth < 640 ? 33 : 2;
      
      window.scrollTo({
        top: absoluteTop - headerHeight + offset,
        behavior: 'smooth'
      });
    }
  }
});

// Mobile Menu Logic
const openButton = document.querySelector('.my__open-button');
const closeButton = document.querySelector('.my__close-button');
const mobileMenu = document.querySelector('.my__mobile-menu');
const backdrop = mobileMenu.querySelector('.fixed.inset-0');
const menuPanel = mobileMenu.querySelector('.fixed.inset-y-0');
const body = document.body;

function openMenu() {
  // Показуємо меню
  mobileMenu.classList.remove('hidden');
  // Даємо час для початку анімації
  setTimeout(() => {
    backdrop.classList.remove('opacity-0');
    menuPanel.classList.remove('translate-x-full');
  }, 10);
  body.style.overflow = 'hidden';
  console.log('Menu opened');
}

function closeMenu() {
  // Запускаємо анімацію закриття
  backdrop.classList.add('opacity-0');
  menuPanel.classList.add('translate-x-full');
  // Чекаємо завершення анімації перед приховуванням
  setTimeout(() => {
    mobileMenu.classList.add('hidden');
    body.style.overflow = '';
  }, 300); // Час має співпадати з duration-300
  console.log('Menu closed');
}

// Open menu
openButton.addEventListener('click', (e) => {
  e.stopPropagation();
  openMenu();
  console.log('Open button clicked');
});

// Close menu
closeButton.addEventListener('click', closeMenu);

// Close when clicking backdrop
backdrop.addEventListener('click', (e) => {
  console.log('Backdrop clicked', {
    target: e.target,
    currentTarget: e.currentTarget,
    classList: e.target.classList
  });
  e.stopPropagation();
  closeMenu();
});

// Prevent clicks on menu content from closing
menuPanel.addEventListener('click', (e) => {
  // Перевіряємо, чи клік був по навігаційному посиланню
  const isNavigationLink = e.target.tagName === 'A';
  
  // Якщо клік не по посиланню - закриваємо меню
  if (!isNavigationLink) {
    closeMenu();
  }
  
  e.stopPropagation();
});

// Close on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMenu();
  }
});

// Close when clicking menu links
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');

    closeMenu();

    setTimeout(() => {
      window.location.href = href;
    }, 300);
  });
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

document.querySelector('.nav a[href="#"]').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Add logo click handler for mobile menu
document.querySelector('.my__mobile-men--logo').addEventListener('click', function(e) {
  e.preventDefault();
  closeMenu(); // Close the mobile menu first
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, 300); // Wait for menu close animation
});

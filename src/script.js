// Open/Close Mobile Menu Logic

const openButton = document.querySelector('.my__open-button');
const closeButton = document.querySelector('.my__close-button')
const mobileMenu = document.querySelector('.my__mobile-menu');
const activityDirections = document.querySelector('.my__activity-directions');

openButton.addEventListener('click', function(e) {
  mobileMenu.classList.remove('hidden');
});

closeButton.addEventListener('click', function(e) {
  mobileMenu.classList.add('hidden');
});

activityDirections.addEventListener('click', function(e){
  mobileMenu.classList.add('hidden');
});



let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let planButtons = document.querySelectorAll('.plan button');
let noButton = document.querySelector('.modal__action--negative');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

for (let i = 0; i < planButtons.length; i++) {
  planButtons[i].addEventListener('click', function () {
    // modal.style.display = 'block';
    // backdrop.style.display = 'block';
    // modal.className = 'open'; // this will overwrite
    modal.classList.add('open');
    backdrop.classList.add('open');
  });
}

const closeModal = () => {
  // modal.style.display = 'none';
  // backdrop.style.display = 'none';
  if (modal) {
    modal.classList.remove('open');
  }
  backdrop.classList.remove('open');
}

backdrop.addEventListener('click', function () {
  mobileNav.classList.remove('open');
  closeModal();
});

if (modal) {
  noButton.addEventListener('click', closeModal);
}

toggleButton.addEventListener('click', function () {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});


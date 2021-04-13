var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var noAnswerButton = document.querySelector('.modal__action--negative');
var mobileMenu = document.querySelector('.mobile-nav');
var toggleButtonBar = document.querySelector('.toggle-button');

for (var i= 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', function() {
    // modal.style.display = 'block';
    // backdrop.style.display = 'block';
    modal.classList.add('open');
    backdrop.classList.add('open');
  });
}

backdrop.addEventListener('click', function() {
  mobileMenu.classList.remove('open');
  closeModal();
});

noAnswerButton.addEventListener('click', closeModal);

function closeModal() {
  backdrop.classList.remove('open');
  modal.classList.remove('open');
}

toggleButtonBar.addEventListener('click', function() {
  mobileMenu.classList.add('open');
  backdrop.classList.add('open');
});








console.log(backdrop)
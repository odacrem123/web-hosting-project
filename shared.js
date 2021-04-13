var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var noAnswerButton = document.querySelector('.modal__action--negative');
var mobileMenu = document.querySelector('mobile-nav');
var iconMenuClick = document.querySelector('toggle-button');


for (var i= 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', function() {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
  });
}

backdrop.addEventListener('click', closeModal);
noAnswerButton.addEventListener('click', closeModal);

function closeModal() {
  backdrop.style.display = 'none';
  noAnswerButton.style.display = 'none';
}

iconMenuClick.addEventListener('click', function() {
  mobileMenu.style.display = 'block';
});






console.log(backdrop)
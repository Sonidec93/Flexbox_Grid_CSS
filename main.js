var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalCancelButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

var planButtons = document.querySelectorAll('.plan button');

for (let i = 0; i < planButtons.length; i++) {
    planButtons[i].addEventListener('click', function () {
        // backdrop.style.display='block';
        // modal.style.display='block';
        modal.classList.add('open');
        backdrop.classList.add('open');
    })
}

backdrop.addEventListener('click', function () {
    mobileNav.classList.remove('open');
    closeModal();
});
if (modalCancelButton) {
    modalCancelButton.addEventListener('click', closeModal);

}

function closeModal() {
    backdrop.classList.remove('open');
    modal.classList.remove('open');
}
toggleButton.addEventListener('click', () => {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');

})
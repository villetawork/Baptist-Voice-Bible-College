//------------------ mobile menu --------------------//
const menuToggle = document.querySelector('.menu-toggle');
const linksContainer = document.querySelector('.links-container');
const subBtns = document.querySelectorAll('.sub-btn');

menuToggle.addEventListener('click', () => {
  linksContainer.classList.toggle('open');
});

subBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    btn.parentElement.classList.toggle('open');
  });
});
//---------------- loading screen ------------------//


// Wait for the page to fully load
window.addEventListener('load', () => {
    // Delay a bit so animation finishes smoothly
    setTimeout(() => {
        document.getElementById('loadingScreen').classList.add('hide');
    }, 4000); // adjust to match animation duration
});

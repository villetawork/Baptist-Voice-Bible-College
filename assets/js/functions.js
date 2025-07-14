//------------------ mobile menu --------------------//

    $(document).ready(function() {
        $(document).on('click', '.sub-btn', function() {
            $(this).next('.sub-menu').slideToggle();
            $(this).find('.dropdown').toggleClass('rotate');
        })
    })
    
//---------------- loading screen ------------------//


// Wait for the page to fully load
window.addEventListener('load', () => {
    // Delay a bit so animation finishes smoothly
    setTimeout(() => {
        document.getElementById('loadingScreen').classList.add('hide');
    }, 2000); // adjust to match animation duration
});

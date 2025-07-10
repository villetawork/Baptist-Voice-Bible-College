
    $(document).ready(function() {
        $(document).on('click', '.sub-btn', function() {
            $(this).next('.sub-menu').slideToggle();
            $(this).find('.dropdown').toggleClass('rotate');
        })
    })
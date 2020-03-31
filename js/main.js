/*video slider */
function videoSlide(video) {
    document.getElementById('slider').src = video;

}



/* contact us */
$(function() {

    'use strict';
    $('[placeholder ]').focus(function() {

        $(this).attr('data-place', $(this).attr('placeholder'));
        $(this).attr('placeholder', '') // with Jquery 

    });


    $('[placeholder ]').blur(function() {

        $(this).attr('placeholder', $(this).attr('data-place'));

    })





    var input = document.getElementById('myInput');
    var method = document.getElementById('method');
    var show = document.getElementById('icon1');
    var hide = document.getElementById('icon2');

    method.onclick = function() {

        'use strict';

        if (this.textContent === 'show password') {
            input.setAttribute('type', 'text');
            hide.style.opacity = '0';
            show.style.opacity = '1';
            this.textContent = 'hide password'
        } else {
            input.setAttribute('type', 'password');
            hide.style.opacity = '1';
            show.style.opacity = '0';
            this.textContent = 'show password'


        }





    }
});
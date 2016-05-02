/* jslint browser: true, devel: true, maxlen: 85 */
/* global window */

$("document").ready(function(){

    /******************************************************************************/

    // set variables. 
    var firstModal = document.getElementById ('about-modal');
    var firstModalBtn = document.getElementById('about');
    var closeBtn = document.getElementById('close-btn');

    // set a function to open the first modal.
    function openFirstModal() {
        firstModal.style.opacity ='1';
        firstModal.style.zIndex = '10000';   
        firstModalBtn.style.transition ='.35s ease-in-out';   
    }

    // set the function to close the first modal.
    function xClose() {
        firstModal.style.opacity ='0';
        firstModal.style.zIndex = '-10000';
        firstModalBtn.style.transition ='.35s ease-in-out';  
    }

    // set the click toggle modal function.
    function toggleModal() {
        if (firstModal.style.zIndex !== '10000') {
            openFirstModal();
        } else {
            xClose();
        }
    }

    // call the toggleModal function.
    firstModalBtn.addEventListener ('click', toggleModal, false);
    closeBtn.addEventListener ('click', xClose, false);

    /******************************************************************************/

    // $('.popup').click(function(){
    //     var $descript = $(this);
    //     $descript.animate({
    //     opacity:($descript.css('opacity')== 0) ? 1 : 0});
    // })      

});
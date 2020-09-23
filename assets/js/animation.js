function closeModal(){
    var modal = $('div.modal:visible');
    if (modal) {
        var method = modal.data("method") || "fade",
            classIn = method+"In",
            classOut = method+"Out",
            animTime = modal.data("amination-time") || 500;

        modal.removeClass(classIn).addClass(classOut)
        setTimeout(function() { modal.modal('hide').removeClass(classOut).addClass(classIn); }, animTime);
    }
}
$(document).on('click', 'div.modal-dialog button.close, div.modal-dialog button.btn-close', function() {
    closeModal();
});
$(document).on('keyup', function(e) {
    if (e.which == 27) {
        closeModal();
    }
});
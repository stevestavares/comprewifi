function splash() {
	 $("#tela").empty();
    $("#tela").append(
        '<div class="splash-div-header">' +
            '' +
        '</div>' +
        '<div class="splash-div-content">' +
            '<div>' +
                '<img class="splash-content" src="images/logo.png" />' +
           '</div>' +
            '<div id="splash-load">' +
                '<img class="splash-load" src="images/splash-load1.png" />' +
                '<img class="splash-load" src="images/splash-load2.png" />' +
                '<img class="splash-load" src="images/splash-load3.png" />' +
            '</div>' +
        '</div>' +
        '<div class="splash-div-footer">' +
            '' +
        '</div>');
};

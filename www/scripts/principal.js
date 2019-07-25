function principal() {
    $("#tela").empty();
    $("#menu").empty();
    constroiViewMenu();
    configuraMenuPrincipal();
    constroiViewPrincipal();
    configuraPrincipal();
    registraEventosPrincipal()
}

function configuraMenuPrincipal() {
    $("#spanVoltar").hide();
    $("#spanTitulo").text("Compre Wifi");
}

function constroiViewPrincipal() {
    $("#tela").append(
        '<div class="principal">' +
				'<div class="login-header">' +
                '<img class="principal-header-logo" src="images/logo.png" />' +
            '</div>' +
            '<div class="principal-header">' +
                '<div class="principal-content-grid">' +
                    '<div class="principal-content-grid-linha1">' +
                        '<p align="center">' +
												'<a id="btnMesa" hidden="hidden" href="#">' +
                                '<img class="principal-img-button-vertical" src="images/principal/prod01.png" />' +
                            '</a>' +
                            '<a id="btnComanda" hidden="hidden" href="#">' +
                                '<img class="principal-img-button-vertical" src="images/principal/prod02.png" />' +
                            '</a>' +
                        '</p>' +
												'<p align="center">' +
                            '<a id="btnListaProduto" href="#">' +
                                '<img class="principal-img-button-vertical" src="images/principal/prod03.png" />' +
                            '</a>' +
														'<a id="btnListaProduto" href="#">' +
                                '<img class="principal-img-button-vertical" src="images/principal/prod04.png" />' +
                            '</a>' +
                        '</p>' +
                    '</div>' +
                '</div>' +

            '</div>' +
        '</div>'

        );
};

function registraEventosPrincipal() {
    $("#btnMesa").click(function () {
        exibeMesas();
    });
    $("#btnComanda").click(function () {
    });
    $("#btnSomenteMesa").click(function () {
        exibeMesas();
    });
    $("#btnSomenteComanda").click(function () {
    });
    $("#btnListaProduto").click(function () {
        exibeViewGrupos();
    });
    $("#btnProduto").click(function () {
        produtos();
    });
    $("#btnCliente").click(function () {
        exibeViewCliente();
    })
    $("#btnVoltarPrincipal").click(function () {
        principal();
    });

}

function configuraPrincipal() {
                $("#btnMesa").show();
                $("#btnComanda").show();

}
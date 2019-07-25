function exibeMesas() {
    $("#tela").empty();
    $("#menu").empty();
    constroiViewMenu();
    configuraMenuMesas();
    constroiViewMesas();
    exibeRelacaoMesas();
}

function configuraMenuMesas() {
    $("#spanVoltar").show();
    $("#spanTitulo").text(" Mesas");
    $("#btnVoltar").attr("href", "javascript:principal()");
}

function constroiViewMesas() {
    $("#tela").append(
        '<div class="principal">' +
            '<div class="mesas-header">' +
                '<div class="principal-content-grid">' +
                    '<table class="mesa-tabela" align="center">' +
                        '<tr>' +
                            '<td>' +
                                '<div id="divRelacaoMesas" class="mesas-content-grid-linha">' +
                                '</div>' +
                            '</td>' +
                        '</tr>' +
                    '</table>' +
                '</div>' +
            '</div>' +
        '</div>');
}

function exibeRelacaoMesas() {
    $("#divRelacaoMesas").empty();
    $.ajax({
        type: "GET",
        dataType: "JSON",
        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        url: "http://guiabomdespacho.com/portopdv/getMesas.php",
        success: function (retorno) {
            montaMesas(retorno);
        },
        error: function () {
            alert("Houve um erro ao recuperar os dados das mesas!");
        }
    });
}

function montaMesas(mesas) {

    var tr = "";
    for (var i = 0, j = 1; i < mesas.length ; i++, j++) {
        if (j == 1) {
            tr += "<p>";
        }
        var classe = ""

        if (mesas[i].status == 1) {
            classe = "mesa-disponivel";
        }
        else if (mesas[i].status == 2) {
            classe = "mesa-ocupada";
        }
        else if (mesas[i].status == 3) {
            classe = "mesa-em-fechamento";
        }
        else if (mesas[i].status == 4) {
            classe = "mesa-reservada";
        }
        else if (mesas[i].status == 5) {
            classe = "mesa-bloqueada";
        }

        tr += "<a href='#' onClick='onClickMesa(" + mesas[i].mesa + ")' class='btn btn-primary mesas-botao "+ classe +"' role='button' ><img class='mesas-botao-ico' src='images/mesas/mesas.png' /><br><span class='mesas-numero'><b>" + mesas[i].mesa + "</b></span></a>"

        if (j == 4 || i >= mesas.length) {
            tr += "</p>";
            j = 0;
        }
    }

    var tela = document.getElementById("divRelacaoMesas");

    tela.innerHTML = tr;
}

function onClickMesa(idMesa) {
    exibeMesaProduto(idMesa);
}

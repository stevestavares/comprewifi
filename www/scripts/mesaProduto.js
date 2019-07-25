function exibeMesaProduto(idMesa) {
    $("#tela").empty();
    $("#menu").empty();
    constroiViewMenu();
    configuraMenuMesaProduto();
    constroiViewMesaProduto();
    exibeRelacaoMesaProduto(idMesa);
}

function configuraMenuMesaProduto() {
    $("#spanVoltar").show();
    $("#spanTitulo").text(" Mesa");
    $("#btnVoltar").attr("href", "javascript:exibeMesas()");
}

function constroiViewMesaProduto() {
    $("#tela").append(
        '<div class="mesaProduto-fundo">' +
            '<div>' +
                '<nav class="navbar navbar-default navbar-fixed-top navbar-mesaProduto navbar-mesaProduto-cliente"' +
                    ' style="z-index: 1; position:fixed" role="navigation">' +
                    '<div class="row mesaProduto-estilo-fonte">' +
                        '<div id="divMesaProdutoNumero" class="col-xs-4 mesaProduto-numero-mesa">' +
                            '<!--100-->' +
                        '</div>' +
                        '<div id="divMesaProdutoCliente" class="col-xs-8 mesaProduto-nome-cliente">' +
                            '<!--Gabriel Mechler-->' +
                        '</div>' +
                    '</div>' +
                '</nav>' +
            '</div>' +
            '<div  class="mesaProduto-lista-produtos mesaProduto-estilo-fonte">' +
                '<div class="container">' +
                    '<div class="row">' +
                        '<div id="divMesaProdutoListaProdutos" class="list-group">' +
                        '</div>' +
                    '</div>' +
                '</div>' +

            '</div>' +
            '<div id="divAcoes" class="navbar navbar-fixed-bottom navbar-inverse mesaProduto-footer mesaProduto-estilo-fonte">' +
            '</div>' +
        '</div>'
    );
}

function exibeRelacaoMesaProduto(idMesa) {
    $("#divMesaProdutoNumero").empty();
    $("#divMesaProdutoCliente").empty();
    $("#divMesaProdutoListaProdutos").empty();
    $.ajax({
        type: "GET",
        dataType: "JSON",
        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        url: "http://guiabomdespacho.com/portopdv/getMesasProdutos.php?mesa=" + idMesa,
        success: function (retorno) {
            montaMesaProduto(retorno);
        },
        error: function () {
            alert("Houve um erro ao recuperar os produtos da mesa!");
        }
    });

}

function montaMesaProduto(mesaProdutos) {

    var trNumeroMesa = "";
    var trCliente = "";
    var trListaProdutos = "";
    var trAcoes = "";

    trNumeroMesa += mesaProdutos[0].mesa;
    trCliente += mesaProdutos[0].cliente;

    for (var i = 0; i < mesaProdutos.length; i++) {
        var totalProduto = parseFloat(mesaProdutos[i].quantidade) * parseFloat(mesaProdutos[i].preco);

        trListaProdutos += "<div class='list-group-item mesaProduto-lista-produtos-content'>"
        trListaProdutos += "    <div class='row'>"
        trListaProdutos += "        <div class='col-xs-10'>"
        trListaProdutos += "            <div class='row'>" + mesaProdutos[i].produto + "</div>"
        trListaProdutos += "            <div class='row mesaProduto-lista-produtos-item'>"
        trListaProdutos += "                <div class='col-xs-12'>"
        trListaProdutos += "                    &nbsp " + mesaProdutos[i].quantidade + " &nbsp x &nbsp R$ " + mesaProdutos[i].preco + " &nbsp = &nbsp R$ " + totalProduto.toFixed(2).replace(".", ",")
        trListaProdutos += "                </div>"
        trListaProdutos += "            </div>"
        trListaProdutos += "        </div>"

        trListaProdutos += "        <div class='col-xs-2 mesaProduto-icone-add'>"
        trListaProdutos += "            <a href='#' onClick='onClickMesaProduto(" + mesaProdutos[i].idProduto + ")'><span class='icon-Adicionar_inferior2 font13' aria-hidden='true'></span></a>"
        trListaProdutos += "        </div>"
        trListaProdutos += "    </div>"
        trListaProdutos += "</div>"
    }

    trAcoes += "<div class='col-xs-3'>"
    //if (mesaProdutos[0].status == 1 || mesaProdutos[0].status == 4) {
    trAcoes += "    <a class='navbar-brand mesaProduto-footer-icone mesaProduto-centraliza-horizontal' href='#' onClick='onClickAbreMesa(" + mesaProdutos[0].mesa + ")' >"
    trAcoes += "        <span class='glyphicon glyphicon-text-color' aria-hidden='true'></span>"
    trAcoes += "        <div class='mesaProduto-footer-texto'>Abrir</div>"
    trAcoes += "    </a>"
    //}
    trAcoes += "</div>"

    trAcoes += "<div class='col-xs-3'>"
    trAcoes += "    <a class='navbar-brand mesaProduto-footer-icone mesaProduto-centraliza-horizontal' href='#' onClick='onClickSelecionaCliente(" + mesaProdutos[0].mesa + ")'>"
    trAcoes += "        <span class='icon-Usuario2' aria-hidden='true'></span>"
    trAcoes += "        <div class='mesaProduto-footer-texto'>Clientes</div>"
    trAcoes += "    </a>"
    trAcoes += "</div>"

    trAcoes += "<div class='col-xs-3'>"
    trAcoes += "    <a class='navbar-brand mesaProduto-footer-icone mesaProduto-centraliza-horizontal' href='#' onClick='onClickImprimeParcial(" + mesaProdutos[0].mesa + ")'>"
    trAcoes += "        <span class='icon-Parcial2' aria-hidden='true'></span>"
    trAcoes += "        <div class='mesaProduto-footer-texto'>Parcial</div>"
    trAcoes += "    </a>"
    trAcoes += "</div>"

    trAcoes += "<div class='col-xs-3'>"
    trAcoes += "    <a class='navbar-brand mesaProduto-footer-icone mesaProduto-centraliza-horizontal' href='#' onClick='onClickAdicionaItem(" + mesaProdutos[0].mesa + ")'>"
    trAcoes += "        <span class='icon-Adicionar_inferior2' aria-hidden='true'></span>"
    trAcoes += "        <div class='mesaProduto-footer-texto'>Add item</div>"
    trAcoes += "    </a>"
    trAcoes += "</div>"


    var numeroMesa = document.getElementById("divMesaProdutoNumero");
    var nomeCliente = document.getElementById("divMesaProdutoCliente");
    var listaProdutos = document.getElementById("divMesaProdutoListaProdutos");
    var acoes = document.getElementById("divAcoes");

    numeroMesa.innerHTML = trNumeroMesa;
    nomeCliente.innerHTML = trCliente;
    listaProdutos.innerHTML = trListaProdutos;
    acoes.innerHTML = trAcoes;
}

function onClickAbreMesa(idMesa) {
    $.ajax({
        type: "GET",
        dataType: "JSON",
        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        url: "http://guiabomdespacho.com/portopdv/getMesas.php",
        success: function (retorno) {
            for (var i = 0; i < retorno.length; i++) {
                if (retorno[i].mesa == idMesa) {
                    ValidaDisponibilidadeMesa(retorno[i]);
                }
            }
        },
        error: function () {
            alert("Houve um erro ao realizar a abertura da mesa!");
        }
    });

}

function ValidaDisponibilidadeMesa(mesa) {
    //var data = {
    //    MesaId: mesa.idMesa,
    //    NumeroMesa: mesa.mesa,
    //    Status: mesa.status
    //};

    var msg2 = { "Employeename": "Denny", "Designation": "engg.", "Address": "vadodara", "Email": "pr@ab.com" };

    $.ajax({
        type: "GET",
        dataType: "JSON",
        data: JSON.stringify(msg2),
        contentType: "application/json; charset=utf-8",
        ProcessData: true,
        url: "http://localhost:14591/api/mesa/disponivel",
        success: function (retorno) {
            alert(retorno);
        },
        error: function () {
            alert("Houve um erro ao validar o status da mesa!");
        }
    });
}

function onClickSelecionaCliente(idMesa) {
}

function onClickImprimeParcial(idMesa) {
}

function onClickAdicionaItem(idMesa) {
}
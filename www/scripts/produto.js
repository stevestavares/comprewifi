function exibeViewProdutos(value) {
    $("#tela").empty();
    $("#menu").empty();
    constroiViewMenu();
    configuraMenuProdutos();
    constroiViewProdutos()
    var idGrupo = value;
    obtemProdutos(idGrupo);
    registraEventosProdutos();
}

function configuraMenuProdutos() {
    $("#spanVoltar").show();
    $("#spanTitulo").text(" Produtos");
    $("#spanTitulo").attr("href", "javascript:exibeViewGrupos()");
    $("#btnVoltar").attr("href", "javascript:exibeViewGrupos()");
}

function constroiViewProdutos() {
    $("#tela").append(
      '<div>' +
                '<nav class="navbar navbar-default navbar-fixed-top navbar-mesaProduto produto-localizar"' +
                    ' style="z-index: 1; position:fixed" role="navigation">' +
                    '<div class="row produto-grid-localizar">' +
                        '<div class="col-xs-1 col-md-2 produto-ico-localizar">' +
                             '<font color="#ffffff">' +
                                '<span class="icon-busca1" aria-hidden="true">' + '</span>' +
                             '</font>' +
                        '</div>' +
                        '<div  class="col-xs-10 mesaProduto-nome-cliente">' +
                            '<span>' + '<input id="searchProduto" type="text" class="form-control input-pesquisa" placeholder="Localizar...">' + '</span>' +
                        '</div>' +
                    '</div>' +
                '</nav>' +
            '</div>' +
        '<div class="principal">' +
            '<div class="produto-header">' +
                '<div class="produto-content-grid">' +
                    '<div class="produto-content">' +
                        '<div class="container produto-table" >' +
                            '<table id="tableProdutos" class="table produto-tabela" style="background-color: #32383D; color: #ffffff">' +
                            '</table>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>');
}



function obtemProdutos(idGrupo) {
    $.ajax({
        type: "GET",
        url: 'http://guiabomdespacho.com/portopdv/getProdutoGrupo.php?grupo=' + idGrupo,
        cache: false,
        contentType: "application/json;charset=utf-8",
        success: function (retorno) {
            constroiTabelaProdutos(retorno);
        }
    });
}

function constroiTabelaProdutos(produtos) {
    for (var i = 0; produtos.length > i; i++) {
        if (produtos[i].idProduto > 0) {
            var row = $('<tr>');
            row.append($('<td class="produto-lista">' + produtos[i].nome + '<br>R$ <b>' + produtos[i].preco + '</b></td>'));
            row.append($('<td width="3%">' +
                    '<button value="id0' + produtos[i].idProduto + '" onclick="abreJanela(this.value)" class="w3-btn font13">&#8942;</button>' +
                        '<div id="id0' + produtos[i].idProduto + '" class="w3-modal">' +
                        '<div class="w3-modal-content w3-card-4"><div class="w3-container">' +
                            '<h4 class="produto-imagem-popup">' +
                            '<font color="#000000">' + produtos[i].nome + '<span class="produto-preco">R$ <b>' + produtos[i].preco + '</b>' +
                            '</span></font></h4><hr>' +
                            '<p align="center"><img class="produto-tabela" src="data:image/jpeg;base64,' + produtos[i].imagem + '" /></p>' +
                        '</div>' +
                        '<footer class="w3-container w3-teal">' +
                            '<p align="center">' +
                                '<button value="id0' + produtos[i].idProduto + '" onclick="fechaJanela(this.value)" class="w3-btn">' +
                                    '<span class="icon-Confirmar_inferior2 font14" aria-hidden="true"></span>' +
                                '</button>' +
                            '</p>' +
                        '</footer>' +
                    '</div>' +
                 '</td>'));
            row.append($('</tr>'));
            $("#tableProdutos").append(row);
        }
    }
}

function registraEventosProdutos() {

    $('#searchProduto').keyup(function () {
        searchTable($(this).val());
    });

    function searchTable(inputVal) {
        var table = $('#tableProdutos');
        table.find('tr').each(function (index, row) {
            var allCells = $(row).find('td');
            if (allCells.length > 0) {
                var found = false;
                allCells.each(function (index, td) {
                    var regExp = new RegExp(inputVal, 'i');
                    if (regExp.test($(td).text())) {
                        found = true;
                        return false;
                    }
                });
                if (found == true) $(row).show(); else $(row).hide();
            }
        });
    }

};

function abreJanela(value) {
    document.getElementById(value).style.display = "block"
}

function fechaJanela(value) {
    document.getElementById(value).style.display = 'none'
}

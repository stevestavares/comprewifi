function exibeViewGrupos() {
    $("#tela").empty();
    $("#menu").empty();
    constroiViewMenu();
    configuraMenuGrupo();
    constroiViewGrupo();
    obtemGrupos();
};

function configuraMenuGrupo() {
    $("#spanVoltar").show();
    $("#spanTitulo").text(" Grupo de Produtos");
    $("#btnVoltar").attr("href", "javascript:principal()");
}

function constroiViewGrupo() {
    $("#tela").append(
        '<div class="principal">' +
            '<div class="grupo-header">' +
                '<div class="grupo-content-grid">' +
                    '<div class="principal-content-produtos" >' +
                        '<table class="grupo-tabela" align="center">' +
                                '<tr>' +
                                    '<td>' +
                                        '<p id="grupo">' +
                                    '</td>' +
                                '</tr>' +
                          '</table>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>'
     );
}

function obtemGrupos() {
    $.ajax({
        type: "GET",
        url: "http://guiabomdespacho.com/portopdv/getGrupo.php",
        cache: false,
        contentType: "application/json;charset=utf-8",
        success: function (retorno) {
            constroiTabelaGrupos(retorno);
        }
    });
}

function constroiTabelaGrupos(grupos) {
    for (var i = 0; grupos.length > i; i++) {
        if (grupos[i].idGrupo > 0) {
            $('#grupo').append(
                '<button value="' + grupos[i].idGrupo + '" onclick="exibeViewProdutos(this.value)" class="btn btn-primary grupo-botao">' +
                '<br><img class="grupo-produto-botao-ico" src="data:image/jpeg;base64,' + grupos[i].imagem + '" /><br>' +
                    '<br>' + grupos[i].descricao + '</button>');
        }
    } 
}


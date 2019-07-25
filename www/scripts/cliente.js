function exibeViewCliente() {
    $("#tela").empty();
    $("#menu").empty();
    constroiViewMenu();
    configuraMenuCliente();
    constroiViewCliente();
    obtemClientes();
}

function configuraMenuCliente() {
    $("#spanVoltar").show();
    $("#spanTitulo").text(" Clientes");
    $("#btnVoltar").attr("href", "javascript:principal()");
}

function constroiViewCliente() {
    $("#tela").append(
        "<div class='principal'>" +
            "<div class='cliente-header'>" +
                "<div class='cliente-content-grid'>" +
                    "<div class='cliente-content'>" +
                        "<div class='container cliente-tabela'>" +
                            "<font color='#ffffff'>" +
                                "<span class='icon-busca1 font13' aria-hidden='true'></span>" +
                                "<span>" +
                                    "<input id='txtObtemClientes'" +
                                    "type='text'" +
                                    "class='form-control input-pesquisa' placeholder='Localizar...'" +
                                    "onkeyup='localizaClientes()'>" +
                                "</span>" +
                            "</font>" +
                            "<table id='tableClientes'" +
                                "class='table' style='background-color: #32383D; color: #ffffff'>" +
                            "</table>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
            "</div>" +
        "</div>");
}

function obtemClientes() {
    $.ajax({
        type: "GET",
        url: "http://guiabomdespacho.com/portopdv/getClientes.php",
        //data:,
        cache: false,
        contentType: "application/json;charset=utf-8",
        success: function (retorno) {
            constroiTabelaClientes(retorno);
        }
    });
}

function constroiTabelaClientes(clientes) {
    for (var i = 0; i <= clientes.length; i++) {
        var row = $("<tr onclick='selecionaCliente($(this))'>");
        row.append($("<td>" +
                        "<span>" + clientes[i].PessoaVModel.Nome + "</span><br />" +
                        "<span>Cód.: </span>" +
                        "<span>" + clientes[i].PessoaVModel.PessoaId + "</span>" +
                     "</td>"));
        row.append($("</tr>"));
        $("#tableClientes").append(row);
    }
}

function selecionaCliente(selecionado) {
    var dados = {
        Codigo: selecionado.find("td:eq(0)").children("span").eq(2).text(),
        Nome: selecionado.find("td:eq(0)").children("span").eq(0).text()
    };
    return dados;
}

function localizaClientes() {
    $("#tableClientes").find('tr').each(function (index, row) {
        var allCells = $(row).find('td');
        if (allCells.length > 0) {
            var found = false;
            allCells.each(function (index, td) {
                var regExp = new RegExp($("#txtObtemClientes").val(), 'i');
                if (regExp.test($(td).text())) {
                    found = true;
                    return false;
                }
            });
            if (found == true) $(row).show(); else $(row).hide();
        }
    });
}

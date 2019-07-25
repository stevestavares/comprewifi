function constroiViewMenu() {
    $("#menu").append(
    '<nav class="navbar navbar-default navbar-fixed-top" role="navigation">' +
        '<div class="container-fluid">' +
            '<div class="navbar-header">' +
                '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">' +
                    '<span class="sr-only">' +
                    '</span>' +
                    '<span class="icon-bar">'
                    + '</span>' +
                    '<span class="icon-bar">' + '</span>' +
                    '<span class="icon-bar">' + '</span>' +
                '</button>' +
                    '<div class="row col-xs-10 show-grid"> <div id="spanVoltar" class="col-xs-1 navbar-brand"><a id="btnVoltar" href="#" class="w3-btn icon-Voltar2"></a></div> <div class="col-xs-9 navbar-brand" style="margin-top: 2px;"><span class="menu-titulo" id="spanTitulo" ></span></div> </div>' +

            '</div>' +
            '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">' +
                '<ul class="nav navbar-nav">' +
                    '<li>' +
                        '<a id="btn-logout">' +
                            '<span class="glyphicon glyphicon-off" aria-hidden="true">' + '</span>' +
                        ' Logoff</a>' +
                    '</li>' +
                    '<li>' +
                        '<a href="#">' +
                            '<span class="glyphicon glyphicon-cog" aria-hidden="true">' + '</span>' +
                        ' Configuração</a>' +
                    '</li>' +
                    '<li>' +
                        '<a href="#">' +
                            '<span class="glyphicon glyphicon-info-sign" aria-hidden="true">' + '</span>' +
                        ' Sobre</a>' +
                    '</li>' +
                '</ul>' +
            '</div>' +
        '</div>' +
    '</nav>');
		registraEventosMenu();
};

function registraEventosMenu() {
    $("#btn-logout").click(function () {
			$.ajax({
			type : 'POST',
			url  : 'https://www.tbadigital.com.br/app/comprewifi/logout.php',
			dataType: 'json',
			success :  function(response){						
				if(response.codigo == "1"){	
					login();
				}
				else{			
				}
		    }
		});
    login();    
    });
}
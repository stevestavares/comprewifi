function cadastro() {
    $("#tela").empty();
		$("#menu").empty();
    $("#tela").append(
		'<form id="cadastro-form" role="form" action="https://www.tbadigital.com.br/app/comprewifi/cadastra.php" method="post"> ' +
        '<div class="cadastro" id="cadastro">' +
            '<div class="cadastro-header">' +
                '<img class="cadastro-header-logo" src="images/logo.png" />' +
								'<br><span Class="cadastro100-form-title">Seja Bem Vindo</span>' +
            '</div>' +
            '<div class="cadastro-content">' +
                '<div class="cadastro-content-password">' +
										'<div class="cadastro-password-content">' +
                        '<input type="text" class="cadastro-input" id="nome" name="nome" placeholder="Nome Completo" />' +
                    '</div>' +
                '</div>' +
                '<div class="cadastro-content-password">' +
										'<div class="cadastro-password-content">' +
                        '<input type="text" class="cadastro-input" id="email" name="email" placeholder="Email" />' +
                    '</div>' +
                '</div>' +
								'<div class="cadastro-content-password">' +
										'<div class="cadastro-password-content">' +
                        '<input type="text" class="cadastro-input" id="telefone" name="telefone" placeholder="Telefone" />' +
                    '</div>' +
                '</div>' +
								'<div class="cadastro-content-password">' +
										'<div class="cadastro-password-content">' +
                        '<input type="text" class="cadastro-input" id="cpf" name="cpf" placeholder="CPF" />' +
                    '</div>' +
                '</div>' +
								'<div class="cadastro-content-password">' +
										'<div class="cadastro-password-content">' +
												'<input type="password" class="cadastro-password-input" id="senha" name="senha" placeholder="Informe sua Senha" />' +
										'</div>' +
								'</div>' +
								'<div class="cadastro-content-password">' +
										'<div class="cadastro-password-content">' +
												'<input type="password" class="cadastro-password-input" id="senha2" name="senha2" placeholder="Repita sua Senha" />' +
										'</div>' +
								'</div>' +
        '</div>' +
            '<div class="cadastro-footer">' +
                '<div class="cadastro-footer-botoes">' +
									'<div class="form-group margin-top-pq">' +
										'<div class="col-sm-12 controls">' +
										'<button type="button" class="btn btn-primary btn-lg btn-block" name="btn-cadastro" id="btn-cadastro">Cadastrar</button><br>' +
										'</div>' +
									'</div>' +

                '</div>' +
            '</div>' +
					'</div>' +
				'<div id="cadastro-alert" class="alert alert-danger col-sm-12">' +
        '<span class="glyphicon glyphicon-exclamation-sign"></span>' +
        '<span id="mensagem"></span>' +
        '</div>' +
				'<div class="footer" >' +
					'<span class="txt1">Não tem conta ainda? </span>' +
					'<!--<a class="txt2" href="cadastro.php"><b>Cadastrar</b></a>-->' +
					'<button type="button" name="btn-log" id="btn-log"><b>Logar</b></button><br>' +
				'</div>'+
				'</form>' +
				'<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>' +
			  '<script src="scripts/custom.js"></script>' );

      registraEventoscadastro();

}

function registraEventoscadastro() {
    $("#btn-cadastro").click(function () {
        autentica();
    });
		$("#btn-log").click(function () {
        login();
    });
}

function autentica() {
	var data = $("#cadastro-form").serialize();
			
		$.ajax({
			type : 'POST',
			url  : 'https://www.tbadigital.com.br/app/comprewifi/cadastra.php',
			data : data,
			dataType: 'json',
			beforeSend: function()
			{	
				$("#btn-cadastro").html('Validando ...');
			},
			success :  function(response){						
					if(response.codigo == "1"){	
						$("#btn-cadastro").html('Cadastrar');
						$("#cadastro-alert").css('display', 'none')
						login();
					}
					else{			
						$("#btn-cadastro").html('Cadastrar');
						$("#cadastro-alert").css('display', 'block')
						$("#mensagem").html('<strong>Erro! </strong>' + response.mensagem);
					}
					}
		});
}
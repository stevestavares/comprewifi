function login() {
    $("#tela").empty();
		$("#menu").empty();
    $("#tela").append(
		'<form id="login-form" role="form" action="https://www.tbadigital.com.br/app/comprewifi/login.php" method="post"> ' +
        '<div class="login" id="login">' +
            '<div class="login-header">' +
                '<img class="login-header-logo" src="images/logo.png" />' +
								'<br><span Class="login100-form-title">Seja Bem Vindo</span>' +
            '</div>' +
            '<div class="login-content">' +
                '<div class="login-content-user">' +
                    '<div class="login-password-content">' +
                        '<input type="text" class="login-password-input" id="email" name="email" placeholder="Email" />' +
                    '</div>' +
                '</div>' +
            '<div class="login-content-password">' +
                '<div class="login-password-content">' +
                    '<input type="password" class="login-password-input" id="senha" name="senha" placeholder="Senha" />' +
                '</div>' +
            '</div>' +
        '</div>' +
            '<div class="login-footer">' +
                '<div class="login-footer-botoes">' +
									'<div class="form-group margin-top-pq">' +
										'<div class="col-sm-12 controls">' +
										'<button type="button" class="btn btn-primary btn-lg btn-block" name="btn-login" id="btn-login">Entrar</button><br>' +
										'</div>' +
									'</div>' +

                '</div>' +
            '</div>' +
					'</div>' +

				'<div id="login-alert" class="alert alert-danger col-sm-12">' +
        '<span class="glyphicon glyphicon-exclamation-sign"></span>' +
        '<span id="mensagem"></span>' +
        '</div>' +
				'<div class="footer" >' +
					'<span class="txt1">Não tem conta ainda? </span>' +
					'<!--<a class="txt2" href="cadastro.php"><b>Cadastrar</b></a>-->' +
					'<button type="button" name="btn-cad" id="btn-cad"><b>Cadastrar</b></button><br>' +
				'</div>'+
				
				'</form>' +
				'<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>' +
			  '<script src="scripts/custom.js"></script>' );

      registraEventosLogin();

}

function registraEventosLogin() {
    $("#btn-login").click(function () {
        autentica();
    });
		$("#btn-cad").click(function () {
        cadastro();
    });
}

function autentica() {
	var data = $("#login-form").serialize();
			
		$.ajax({
			type : 'POST',
			url  : 'https://www.tbadigital.com.br/app/comprewifi/login.php',
			data : data,
			dataType: 'json',
			beforeSend: function()
			{	
				$("#btn-login").html('Validando ...');
			},
			success :  function(response){						
				if(response.codigo == "1"){	
					principal();
				}
				else{			
				}
		    }
		});
}
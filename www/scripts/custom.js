$('document').ready(function(){

	$("#btn-login").click(function(){
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
					$("#btn-login").html('Entrar');
					$("#login-alert").css('display', 'none')
					principal();
				}
				else{			
					$("#btn-login").html('Entrar');
					$("#login-alert").css('display', 'block')
					$("#mensagem").html('<strong>Erro! </strong>' + response.mensagem);
				}
		    }
		});
	});
	
	
		$("#btn-cadastro").click(function(){
			var data = $("#form-cadastro").serialize();
			
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
		});

});
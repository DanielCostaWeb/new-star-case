<?php 
/*
* Formulário padrão de site
* Ajustar conforme necessidade
*/
ob_start();
// Verificação de spam
if(!empty($_POST) || isset($_POST)){
	// criar input com o name 'emailText' para a validação do spam (opcional) e também atribuir o type="hidden"
	$emailSpam = $_POST["emailText"];
	if(!empty($emailSpam)){
		$spam=true;
	}	
}else{
	$spam=true;
}
if (preg_match( "/bcc:|cc:|multipart|\[url|Content-Type:/i", implode($_POST)) || preg_match_all("/<a|http:/i", implode($_POST), $out) > 3) {
	$spam=true;  
}
if(@$spam != true){
	// Defina Timezone para São Paulo
	date_default_timezone_set("America/Sao_Paulo");
	// Ajustar conforme o tipo de formulário que você construiu
	$Nome = $_POST["nome"];
	$Email = $_POST["email"];
	$Telefone = $_POST["telefone"];
	$Mensagem = $_POST["mensagem"];
	$ip = $_SERVER["REMOTE_ADDR"];
	$AssuntoEmail = "Contato do Site - New Star Case";

	// Inclui o arquivo class.phpmailer.php localizado na pasta phpmailer
	require("phpmailer/class.phpmailer.php");
	 
	// Inicia a classe PHPMailer
	$mail = new PHPMailer();
	 
	// Define os dados do servidor e tipo de conexão
	//$mail->IsSMTP(); // Define que a mensagem será SMTP
	//$mail->Host = "smtp.andravoltgeradores.com.br"; // Endereço do servidor SMTP
	//$mail->SMTPAuth = true; // Colocar true para fazer a autenticação
	//$mail->Port = 587;
	//$mail->Username = 'site@andravoltgeradores.com.br'; // Usuário do servidor SMTP
	//$mail->Password = 'Andra@1324'; // Senha da caixa postal utilizada
 
	// Define o remetente
	$EmailEmpresa = "manoel.noe2013@gmail.com"; // Seu e-mail
	$mail->From = $Email; // email host
	$mail->Sender = $Email; // email host
	$mail->FromName = $Nome; // nome solicitante

	 
	// Define os destinatário(s)
	$mail->AddAddress($EmailEmpresa);
	$mail->AddCC('danieusc@hotmail.com'); // Copia
	


	 
	// Define os dados técnicos da Mensagem
	$mail->IsHTML(true); // Define que o e-mail será enviado como HTML
	$mail->CharSet = "UTF-8"; // Charset da mensagem (opcional)
	 
	// Define a mensagem (Texto e Assunto)
	// ajustar conforme as variaveis que você atribuiu acima
	$Corpo = "<b>Nome: </b>".$Nome."<br>";
	$Corpo .= "<b>Email: </b>".$Email."<br>";
	$Corpo .= "<b>Telefone: </b>".$Telefone."<br>";
	$Corpo .= "<b>Mensagem: </b>".$Mensagem."<br>";
	$Corpo .= "<b>IP de Origem: </b>".$ip;
	$mail->Subject = $AssuntoEmail; // Assunto da mensagem
	$mail->Body = $Corpo;

	// Define os anexos (opcional)
	//$mail->AddAttachment($arquivo['tmp_name'], $arquivo['name']  );
	//$mail->AddAttachment("/home/login/documento.pdf", "novo_nome.pdf");  // Insere um anexo
	 
	// Envia o e-mail
	$enviado = $mail->Send();
	 
	if ($enviado) {
		// se foi enviado redireciona para a pagina
		header("Location: obrigado.html");
	} else {
		// caso ao contrario ele exibe o erro
		echo "Não foi possível enviar o e-mail.";
		echo "Informações do erro: " . $mail->ErrorInfo;
	}
}	
?>
<?php
	
		
	if($_SERVER["REQUEST_METHOD"]=="POST"){	
		
		$fname = "\nИмя: ".trim(strip_tags($_POST["name"]));
		$fphone = "\nОтчество <br>".trim(strip_tags($_POST["phone"]));
		/*$email = "\nE-mail: ".trim(strip_tags($_POST["email"]));
		$text = "\nТекст сообщения: ".trim(strip_tags($_POST["text"]));*/
		$headers = 'Content-type: text/html; charset=utf-8' ;
		mail("photo@623030.ru","","$host, $fname, $fphone","$headers");
		header("Location: ".$_SERVER['PHP_SELF']);
	}

?>
						
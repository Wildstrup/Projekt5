<?php
if( isset($_POST['n']) && isset($_POST['e']) && isset($_POST['b']) ){
	$n = $_POST['n']; // HINT: use preg_replace() to filter the data
	$e = $_POST['e'];
	$m = nl2br($_POST['b']);
	$to = "madsvj@live.dk";
	$from = $e;
	$subject = 'Kundekontakt';
	$message = '<b>Navn:</b> '.$n.' <br><b>Email:</b> '.$e.' <p>'.$b.'</p>';
	$headers = "Fra: $from\n";
	$headers .= "MIME-Version: 1.0\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\n";
	if( mail($to, $subject, $message, $headers) ){
		echo "success";
	} else {
		echo "The server failed to send the message. Please try again later.";
	}
}
?>

function _(id) {
  return document.getElementById(id);
}

function submitForm(){
	_("mybtn").disabled = true;
	_("status").innerHTML = 'Vent venligst ...';
	var formdata = new FormData();
	formdata.append( "n", _("n").value );
	formdata.append( "e", _("e").value );
	formdata.append( "b", _("b").value );
	var ajax = new XMLHttpRequest();
	ajax.open( "POST", "../php/kontaktformtest.php" );
	ajax.onreadystatechange = function() {
		if(ajax.readyState == 4 && ajax.status == 200) {
			if(ajax.responseText == "success"){
				_("my_form").innerHTML = '<h2>Tak '+_("n").value+', din besked er blevet sendt.</h2>';
			} else {
				_("status").innerHTML = ajax.responseText;
				_("mybtn").disabled = false;
			}
		}
	}
	ajax.send( formdata );
}

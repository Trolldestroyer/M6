function codificarPalabra(palabra){
	var nuevapalabra = "";
	for (var i = 0; i<palabra.length; i++){
		var letra = palabra[i];
		if (letra =="T"){
			nuevapalabra=nuevapalabra+"7";
		}else if(letra =="A"){
			nuevapalabra=nuevapalabra+"4";
		}else if (letra =="S"){
			nuevapalabra=nuevapalabra+"5";
		}else if (letra =="O"){
			nuevapalabra=nuevapalabra+"0";
		}else{
			nuevapalabra =nuevapalabra+letra;
		}
}
return nuevapalabra;
}
var palabra = "TASO";
document.write(codificarPalabra(palabra));
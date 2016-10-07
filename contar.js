function contarpalabras(palabras){



	var numero=0;
var palabralarga = "";

	for (var i=0; i<palabras.length;i++){
		if (numero<palabras[i].length){
			numero= palabras[i].length;
			palabralarga = palabras[i];
		}
	}
	document.write("La palabra mas larga es: "+ palabralarga + " con "+ numero + " letras");
}

var a=["s", "an", "sar", "Homero"];
contarpalabras(a);
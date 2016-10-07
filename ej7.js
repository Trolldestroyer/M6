var num=[];
var numerosPositivos=0;
var numerosNegativos=0;
var multiplosde15=0;
var acumulados=0;
var numero=0;

for(var i = 0; i<5; i++){
	numero=prompt("Escribe un numero entero");
	num.push(numero);

	if(num[i]<0){
		numerosNegativos++;
	}else{
		numerosPositivos++;
	}

/*var restos=0;
	restos = num[i]%15;*/
	if(num[i]%15==0){
		multiplosde15++;
	}
	/*restos = num[i]%2;*/

	if(num[i]%2==0){
		var numeritos = parseInt(num[i]);
		acumulados = acumulados + numeritos;
	}
}

document.write("Se han introducido "+ numerosPositivos +" numeros positivos." + "<br>"+ "Se han introducido un total de "+ numerosNegativos+" de numeros negativos."+"<br>"+ "Tenemos "+ multiplosde15 +" multiplos de 15."+"<br>"+ "La acumulacion de numeros pares es: "+ acumulados);
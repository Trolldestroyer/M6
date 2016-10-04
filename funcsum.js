var ncuen=[];
var numcuen=0;
var nom=[];
var nombre="";
var sal=[];
var salario = 0;
var negative =true;
var tip=[];
var ti="";
var con =0;
var str= "";

while(negative == true){
	numcuen= prompt("Escribe una cunta");
	ncuen.push(numcuen);
	nombre= prompt("Escribe un nombre");
	nom.push(nombre);
	salario= prompt("Escribe tu saldo");
	sal.push(salario);
	
	if (sal[con] > 0){
		ti= "Acreedor";
		tip[con] = ti;
		str= "Numero de cuenta: "+ncuen[con]+" Nombre: "+nom[con]+" Saldo: "+sal[con]+" Estado: "+tip[con]+"<br>";
			con++;
	}else if(sal[con] < 0){
		ti = "Deudor";
		tip[con] = ti;
		str= "Numero de cuenta: "+ncuen[con]+" Nombre: "+nom[con]+" Saldo: "+sal[con]+" Estado: "+tip[con]+"<br>";
			negative = false;
	}else{
		ti= "Nulo";
		tip[con] = ti;
		str= "Numero de cuenta: "+ncuen[con]+" Nombre: "+nom[con]+" Saldo: "+sal[con]+" Estado: "+tip[con]+"<br>";
			con++;
	}
	
	
		document.write(str);
			
	}
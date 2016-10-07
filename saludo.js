function saludoPersonal(nombre)
{
	
	var hola="Hola ";
	function saludo(){
	return hola+nombre;
	}
return saludo;
document.write(saludo);
}
var diHola=saludoPersonal("Manu");
diHola();


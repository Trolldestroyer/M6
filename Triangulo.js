
var bas=[];
var alt=[];
var superd=[];
var numero=0;

for(var i=0; i<3 ;i++){
	bas[i]= prompt("Escribe la base");
	alt[i]= prompt("Escribe la altura");

	superd[i]= (bas[i]*alt[i])/2;
	
	if (12< superd[i] ){
		numero++;
	}
}

document.write("Bases: " +alt + "<br>"+"Alturas: " + bas+"<br>"+"<br>");
document.write(numero);
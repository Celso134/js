function seleccion(e){

	var valuer = document.formulario.listu.value;
	var valuer2 = document.formulario.listu2.value;	
	var valuer3 = document.formulario.listu3.value;
	

	document.formulario.r1.value = valuer;
	document.formulario.r2.value = valuer2;
	document.formulario.r3.value = valuer3;


	var desc = 0.15;

	if(valuer=="FunkoPop = $300"){
		 var valuergolo = 300;
	}else if(valuer=="Marvel Legends= $500"){
		var valuergolo = 500;
	}else if(valuer=="Dc Multiverse = $450"){
		var valuergolo = 450;
	}else if(valuer=="Funko Pop Exclusivo = $700"){
		var valuergolo = 700;
	}else{
		var valuergolo = 0;
	}

	if (valuer2=="Consola PS4= $5000") {
		var valuerbeb = 5000;
	}else if(valuer2=="Consola Xbox one= $4000"){
		var valuerbeb = 4000;
	}else if(valuer2=="Nintendo Switch = $6000"){
		var valuerbeb = 6000;
	}else if(valuer2=="Zeebo = $1000"){
		var valuerbeb = 1000;
	}else{
		var valuerbeb = 0;
	}

	if (valuer3=="Comic basico = $25") {
		var valuerbas = 25;
	}else if (valuer3=="Cuadro de pared = $300") {
		var valuerbas = 300;
	}else if (valuer3=="Joystick = $1600") {
		var valuerbas = 1600;
	}else if (valuer3=="Llavero = $120") {
		var valuerbas = 120;
	}else{
		var valuerbas = 0;
	}


	var subthot = valuergolo + valuerbeb + valuerbas ;
	var thot = desc*subthot;
	var f = subthot - thot


	document.formulario.subtotal.value = "$" + subthot;
	document.formulario.descu.value = "$" + thot;
	document.formulario.total.value = "$" + f;



}
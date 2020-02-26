//camino corto pero se mueren tambien

function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    var prov=0;
    var patron = /[0-9\d .]/;
    var tec = String.fromCharCode(teclado);
    var tecleado = document.formulario.cantidad.value;
    for(i=0; i<tecleado.length; i++){
        if(tecleado.charAt(i)!='.'){
            prov=prov+1;
        }
    }
    if(prov==tecleado.length-1){
        var otra=/[0-9\d]/;
        return otra.test(tec);
    }else{
        return patron.test(tec);
    }
}


function interes(){
	var valor = document.formulario.cantidad.value;
	
	if(valor.length==0){
		alert("Ingresa una cantidad a invertir");
		formulario.cantidad.focus();
	}else{
		alert(valor);

		var operacion = parseInt(valor);
		var interes = operacion*0.02;
		var total = operacion + interes;

		document.formulario.ganancia.value = "$" + interes;
		document.formulario.sueldo.value = "$" + total;
	}
}
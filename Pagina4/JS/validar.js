function validar (e){
    var teclado = (document.all)?e.keyCode:e.which;
    var prov=0;
    var patron = /[0-9\d .]/;
    var tec = String.fromCharCode(teclado);
    var tecleado = document.form.calif.value;
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
function validar2 (e){
    var teclado = (document.all)?e.keyCode:e.which;
    var prov=0;
    var patron = /[0-9\d .]/;
    var tec = String.fromCharCode(teclado);
    var tecleado = document.form.calif2.value;
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
function validar3 (e){
    var teclado = (document.all)?e.keyCode:e.which;
    var prov=0;
    var patron = /[0-9\d .]/;
    var tec = String.fromCharCode(teclado);
    var tecleado = document.form.calif3.value;
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
function validar4 (e){
    var teclado = (document.all)?e.keyCode:e.which;
    var prov=0;
    var patron = /[0-9\d .]/;
    var tec = String.fromCharCode(teclado);
    var tecleado = document.form.calife.value;
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
function validar5 (e){
    var teclado = (document.all)?e.keyCode:e.which;
    var prov=0;
    var patron = /[0-9\d .]/;
    var tec = String.fromCharCode(teclado);
    var tecleado = document.form.califp.value;
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

function promedio(){
    
    var p1 = document.form.calif.value;
    if(p1>10){
        alert("La calificacion no puede ser mayor a 10, Revisa La calificacion del Primer Parcial");
        document.getElementById("c1").value = "";
        return null;
    }
    if(p1<0){
        alert("nel es menor a cero")
        document.getElementById("c1").value = "";
        return null;
    }
    var p2=document.form.calif2.value;
    if (p2>10){
        alert("La calificacion no puede ser mayor a 10, Revisa La calificacion del Segundo Parcial");
        document.getElementById("c2").value = "";
        return null;
    }
    if(p2<0){
        alert("nel es menor a cero");
        document.getElementById("c2").value = "";
        return null;
    }
    var p3= document.form.calif3.value;
    if(p3>10){
        alert("La calificacion no puede ser mayor a 10, Revisa La calificacion del Tercer Parcial");
        document.getElementById("c3").value = "";
        return null;
    }
    if(p3<0){
        alert("nel es menor a cero");
        document.getElementById("c3").value = "";
        return null;
    }
    var parcial = (parseFloat(p1) + parseFloat(p2)+parseFloat(p3))
    var parciales = parcial/3;
    var par=parciales*.55 ;
    var exa=document.form.calife.value;
    if(exa>10){
        alert("La calificacion no puede ser mayor a 10, Revisa La calificacion de tu Examen")
        document.getElementById("ex").value ="";
        return null;
    }
    if(exa<0){
        alert("nel es menor a cero");
        document.getElementById("ex").value ="";
        return null;
    }
    var pr=document.form.califp.value;
    if(pr>10){
        alert("La calificacion no puede ser mayor a 10, Revisa La calificacion de tu Proyecto")
        document.getElementById("p").value ="";
        return null;
    }
    if(exa<0){
        alert("nel es menor a cero");
        document.getElementById("p").value ="";
        return null;
    }   
    var x=exa*.30;
    var prr=pr*.15;
    var final=(parseFloat(par) + parseFloat(x)+parseFloat(prr))
    document.form.final.value= final;
}
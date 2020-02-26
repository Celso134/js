function validar (e){
    var teclado=(document.all)? e.keyCode:e.which;
    if (teclado==8) return true;
    var patron =/^([0-9]+\.?[0-9]{0,2})$/;
    var tec = String.fromCharCode(teclado);
    return patron.test(tec);

}
function po(){
    var hombres = document.formu.masc.value;
    if(hombres<0){
        alert("nel es menor a cero")
        document.getElementById("m").value = "";
        return null;
    }
    var mujeres=document.formu.fem.value;
    
    if(mujeres<0){
        alert("nel es menor a cero");
        document.getElementById("f").value = "";
        return null;
    }
    
    var total = (parseInt(hombres) + parseInt(mujeres));
    document.formu.to.value= total;
   
    var porho = hombres*100;
    var porhom =(porho/total) + "%";

    document.formu.masf.value=porhom;

    var pormu = mujeres*100;
    var pormuj =(pormu/total) +"%";

    document.formu.femf.value=pormuj;
}
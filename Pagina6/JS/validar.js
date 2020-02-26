function calcularEdad(){

    var fecha = document.getElementById("fecha").value;
    var hoy = new Date();
    var esteAno = hoy.getYear();
    var esteMes = hoy.getMonth() + 1;
    var esteDia = hoy.getDate();
    

    var valores=fecha.split("-");
    var dia = valores[2];
    var mes = valores[1];
    var ano = valores[0];

    var edad = (esteAno + 1900) - ano;
    if(mes>esteMes){
        edad--;
    }

if(esteAno.value>2019)
{
    alert("No puedes tener una edad negati4a")
}
else
{
    
    
}

    document.getElementById("cantidad").value = edad + ("años");
}
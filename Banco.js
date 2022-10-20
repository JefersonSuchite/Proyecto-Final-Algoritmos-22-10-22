
//LAS FUCTION DE LAS FORMULAS INDIVIDUALES PARA CADA ACCION DE DEPOSITO 
  function formula1() {
    var CantidadT=parseInt(document.getElementById('Cant').value);
    var quetzales=parseInt(document.getElementById('CuentaQ').value);
    var dolares=parseInt(document.getElementById('CuentaD').value);

    document.getElementById('CuentaQ').value=(quetzales+CantidadT);
    
}
 
function formula2() {
    var CantidadT=parseInt(document.getElementById('Cant').value);
    var quetzales=parseInt(document.getElementById('CuentaQ').value);
    var dolares=parseInt(document.getElementById('CuentaD').value);

    document.getElementById('CuentaD').value=(dolares+(CantidadT/8));
    
}

//FUCTION DE LA FORMULAS INDIVIDUALES PARA CADA ACCION DE RETIRO
function formula3() {
    var CantidadT=parseInt(document.getElementById('Cant').value);
    var quetzales=parseInt(document.getElementById('CuentaQ').value);

    var saldoq = document.getElementById('CuentaQ').value=(quetzales-CantidadT);
//ALERTA QUE MENSIONA AL RETIRAR DINERO, COMO UNA CONFIRMACION PARA RETIRAR EL DINERO
    alert ("Por Favor, Tome su Dinero");
}
//ESTO YA NO SE COMO FUNCIONA, TRATO DE LLAMAR UNA VARIABLE PARA QUE LANCE EL SALDO Y NO FUNCIONA NINGUNA VARIABLE
function saldo(){
    var CuentaQ
    alert('Su saldo es :' + CuentaQ);
}
//ESTA FUCION SOLO MUESTRA LAS IMAGENES
function Mostrar1 (){
    document.getElementById('imgq').style.display = 'block';
}
//ESTA FUNCION SOLO OCULTA LAS IMAGENES
function Ocultar1 (){
    document.getElementById('imgq').style.display = 'none';
}

//El retiro es en quetzales, a pesar de ser una cuenta de dolares
function formula4() {
    var CantidadT=parseInt(document.getElementById('Cant').value);
   
    var dolares=parseInt(document.getElementById('CuentaD').value);

    var saldod = document.getElementById('CuentaD').value=(dolares-(CantidadT/8));

    alert ("Por Favor, Tome su Dinero");    
}
//funcion para mostrar la imagen
function Mostrar2 (){
    document.getElementById('imgd').style.display = 'block';
}
//FUNCION PARA OCULTAR LA IMAGEN
function Ocultar2 (){
    document.getElementById('imgd').style.display = 'none';
}
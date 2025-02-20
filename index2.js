//Practica module 5 (introduccion a la programacion)


//Ejercicio 1

// Determinar si puede votar o no 

// let edad = Number(prompt("Ingrese su edad para saber si puede votar o no "))

// if(edad >= 18 ){

//     console.log("Puede votar");
    
// } else {

//     console.log("no puede votar no tiene la edad ");
    
// }


//Ejercicio 2 

// Solicitar dos numeros y determinar cual es el mayor

// let number1 = Number(prompt("Ingrese el 1er numero"))

// let number2 = Number(prompt("Ingrese el segundo numero"))

// if(number1 > number2){

//     console.log(number1 + " " +  "es mayor que " + number2);
    
// } else{

//     console.log(number2 + " " + "es mayor que " + number1 );
    
// }



//Ejercicio 3

// EL usuario debe ingresar 3 numeros y determinar cual es el mayor
// let number1 = Number(prompt("Ingrese el 1er numero"))
// console.log(number1);

// let number2 = Number(prompt("ingrese el 2do numero"))

// let number3 = Number(prompt("ingrese el 3er numero"))

// if((number1 > number2) && (number1 > number3) ){

//     console.log(number1 + " "+  "es mayor que " + " " + number2 + " "+  "y mayor que " + number3);



// } else if((number2 > number1) && (number2 > number3)){


//     console.log(number2 + " "+  "es mayor que " + " " + number1 + " "+  "y mayor que " + number3);

// } else if(number3 > number1 && number3 > number2){
//     console.log(number3 + " "+  "es mayor que " + " " + number1 + " "+  "y mayor que " + number2);

// } else{
//     console.log("los tres numeros son iguales");

// }

//Ejercicio 4

//Programa Determinar si un numero es positivo ,negativo o 0

// let number1 = Number(prompt("ingrese un numero "))

// if(number1 > 0){

//     console.log("El numero es positivo");
    
// } else if( number1 < 0){

//     console.log("el numero es negativo");

    
// } else if(number1 == 0) {
    
//     console.log("el numero es igual a 0");
    
// } else {

//     console.log("no ingresaste ningun numero ,hacelo otra vez");
    
// }

//Ejercicio 5

//determinar el costo de envio por el peso del paquete y la distancia

// let pesoPaquete = Number(prompt("Ingrese el peso del paquete "))

// let distancia = Number(prompt("ingrese la distancia en km"))

// let costoEnvio = 250 

// if(pesoPaquete > 10 || distancia > 1000){

//     let resultado = costoEnvio + 800
//     console.log( " el costo de envio total es " + resultado);
    
// } else {

//     console.log(" el costo de envio total es " + costoEnvio);
    
// }

//Ejercicio 6 

// El usuario ingresa medidida y el programa tiene que identificar que es un trinauglo equilatero , escaleno , isoseles

// let lado1 = Number(prompt("Ingrese el 1er lado"))

// let lado2 = Number(prompt("ingrese el 2do lado"))

// let lado3 = Number(prompt("ingrese el 3er lado"))

// if (lado1 == lado2 && lado2 == lado3 ) {
//     console.log("el triangulo es equilatero ");

// } else if( lado1 != lado2 && lado2 != lado3 && lado3 != lado1){
//     console.log("el triangulo es escaleno");
    
// } else{

//     console.log("el triangulo es isoseles");
    
// }

//Ejercicio 7

// Determinar si el usuario aprobo o no dependiendo de la nota 

// let nota1 = Number(prompt("Ingrese la nota 1"))

// let nota2 = Number(prompt("ingrese la nota 2"))

// let nota3 = Number(prompt("ingrese la nota 3"))

// let promedio =  (nota1 + nota2 + nota3) / 3
// if( promedio >= 7){

//     console.log("Aprobo");
    
// } else{

//     console.log("Desaprobo");
    
// }


//Ejercicio 8 

//Calcular el costo de envio segun el peso del producto y segun la ubicacion del cliente
// let pesoProducto = Number(prompt("Ingreso el peso del producto"))

// console.log(pesoProducto);


// let costoEnvio = 250;

// let adicional = 300;


// if(pesoProducto <= 5){

//     alert("El costo de envio es " + " " + costoEnvio)

// } else if ( pesoProducto > 5) {

//     costoEnvio = costoEnvio + 250 

//     alert("El costo de envio es " + " " + costoEnvio);
    
// } else {

//     alert("numero ingresado invalido");
    


// }

// let ubicacionCliente = prompt("Ingreso la ubicacion del cliente (dentro del pais o fuera del pais)")

// if(ubicacionCliente == "dentro del pais"){

//     // costoEnvioTotal = adicional + costoEnvio


//     alert("se le agrega un adicional al costo de envio por lo que el total es " + " " + `${costoEnvio}` + " + " +  `${adicional}` + "=" +  `${costoEnvio + adicional}`);
    
// }else if(ubicacionCliente == "fuera del pais") {

//     adicional = 2000
//     // costoEnvioTotal = adicional + costoEnvio

//     alert("se le agrega un adicional de " + `${adicional}` + " " +  "al costo de envio por lo que el total es "  + " " + `${costoEnvio}`+ " + " + `${adicional}` + "=" +  `${costoEnvio + adicional}`);
    

// } else {

//     alert("ubicacion ingresada es invalida por favor ingrese dentro del pais o fuera del pais ");
    
// }

// let costoEnvioTotal = adicional + costoEnvio

// alert("El costo de envio total es " + costoEnvioTotal)
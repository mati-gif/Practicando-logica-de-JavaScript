//Practica module 5 (introduccion a la programacion)

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

let nota1 = Number(prompt("Ingrese la nota 1"))

let nota2 = Number(prompt("ingrese la nota 2"))

let nota3 = Number(prompt("ingrese la nota 3"))

let promedio =  (nota1 + nota2 + nota3) / 3
if( promedio >= 7){

    console.log("Aprobo");
    
} else{

    console.log("Desaprobo");
    
}
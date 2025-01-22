console.log("hola mundoo");


//funcion que devuelve la suma de los numeros dentro del array
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10];

const suma = (array) => {
    let acumulador = 0;
    for (let i = 0; i < array.length; i++) {
        acumulador += array[i]; // es lo mismo que hacer  acumulador = acumulador + array[i]
    }

    console.log(acumulador);
};

suma(array);


//-------------------------> ↓↓↓↓↓↓↓↓ <-------------------------------//

//funcion que devuelve el numero mayor que hay en el array
let nums = [1, 2, 3, 4, -8, 678, 7, 8, 9, 10, 11];

const numeroMayor = (nums) => {
    let mayor = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > mayor) {
            mayor = nums[i];
        }
    }

    console.log(mayor);
};

numeroMayor(nums);

//-------------------------> ↓↓↓↓↓↓↓↓ <-------------------------------//

//funcion que filtra el array por lo que se le pase

let productos = [
    "pan",
    "leche",
    "huevo",
    "gaseosa",
    "chocolate",
    "chocolatada",
    "chocolatin",
];

const productosFiltrados = (array, string) => {
    let arrayVacio = [];
    console.log(string);
    for (let i = 0; i < array.length; i++) {
        // console.log(i);
        if (array[i].includes(string)) {
            arrayVacio.push(array[i]);
        }
    }
    console.log(arrayVacio);
};

productosFiltrados(productos, "choco");


//-------------------------> ↓↓↓↓↓↓↓↓ <-----------//

//funcion que ordena en forma ascendente o desendente segun como se le pase el parametro
let ordenarNumeros = [4, 1, 0, 2, 7, 5, 1, 3, 9, 8, 11, 20, 25, 77, 451, 3, -9];

// ordenarNumeros.sort(function (a, b) {
//   return b - a;
// });

// console.log(ordenarNumeros);
const funcionOrdenar = (array, string) => {
    console.log(string);
    if (string.toString() == "asc") {
        array.sort(function (a, b) {
            return a - b;
        });
        return array;
    } else if (string.toString() == "des") {
        array.sort(function (a, b) {
            return b - a;
        });
        return array;
    }
};

funcionOrdenar(ordenarNumeros, "asc");
console.log(funcionOrdenar(ordenarNumeros, "asc"));


//---------> ↓↓↓↓↓↓↓↓ <-----------//

//Generar una tabla de multiplicar

const tablaMultiplicar = (num) => {
    for (let i = 1; i <= 11; i++) {
        console.log(`${i} x ${num} = ${i * num}`);
    }
};

// console.log(tablaMultiplicar(5));
tablaMultiplicar(2);

//---------> ↓↓↓↓↓↓↓↓ <-----------//

//Funcion que corrobora que si el numero sumna 8 da true , si no da false

let num = [1, 4, 3, 9];

let requiredSum = 8;

const sumarNumero = (num, requieredSum) => {
    let result = false;
    for (let i = 0; i <= num.length; i++) {
        // console.log(num[i]);
        for (let j = i + 1; j < num.length; j++) {
            if (num[i] + num[j] === requieredSum) {
                console.log(result);
                return true;
            }
        }
    }
    return result;
};

console.log(sumarNumero(num, requiredSum));

//---------> ↓↓↓↓↓↓↓↓ <-----------//

//Misma Logica que la anterior solo que este te da true porque suma 8
let nums2 = [1, 2, 4, 4];
let requiredSumm = 8;

const sumarArray = (array, requiredSumm) => {
    let result = true;

    for (let i = 0; i < array.length; i++) {
        // console.log(array[i]);
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] + array[i] === requiredSumm) {
                return result;
            }
        }
    }
    return false;
};

console.log(sumarArray(nums2, requiredSumm));


//---------> ↓↓↓↓↓↓↓↓ <-----------//

// contar la suma de los numeros pares y guardar en un array solo los numeros pares
let numeroPar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumaNumeroPar = (array) => {
    let contador = 0;
    let nuevoArray = [];
    let arrayImpar = [];
    let contador2 = 0;

    for (let i = 0; i <= array.length; i++) {
        if (array[i] % 2 === 0) {
            contador += array[i];
            nuevoArray.push(array[i]);
        } else if (array[i] % 2 === 1) {
            contador2 += array[i];
            arrayImpar.push(array[i]);
        }
    }

    console.log(arrayImpar);
    console.log(contador2);
    console.log(contador);
    console.log(nuevoArray);
};

sumaNumeroPar(numeroPar);


//-------------------------> ↓↓↓↓↓↓↓↓ <-------------------------------//

//Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: 
// edad e ingresos. 
// Si edad es igual o mayor a 18 y los ingresos 
// son iguales o mayores a 1000 debe retornar ingresos * 40%. 
// De lo contrario retornar 0.

const calcularImpuesto = (edad, ingresos) => {

    if (edad >= 18 && ingresos >= 1000) {

        return ingresos * 50 / 100
    } else {

        return 0
    }
}

console.log(calcularImpuesto(25, 2000));

//-------------------------> ↓↓↓↓↓↓↓↓ <-------------------------------//

//crear una funcion que sume todos los numeros que hay en un array

let sumaNum = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

const sumaLista = (array) => {

    let resultado = 0;

    for (let i = 0; i < array.length; i++) {

        resultado += array[i]
    }

    console.log(resultado);

}

sumaLista(sumaNum)

//-------------------------> ↓↓↓↓↓↓↓↓ <-------------------------------//

//Escribe una función que determina si la letra que se le pasa 
// como argumento se encuentra contenida dentro de un array de 
// letras que se le pasa como segundo argumento.

let letras = ["a", "c", "e", "g", "i", "j"]

const arrayLetras = (array, string) => {

    let result = true;
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes(string)) {

            return result;
        } else {
            return false;
        }
    }


}

console.log(arrayLetras(letras, "a"));
console.log(arrayLetras(letras, "b"));


//-------------------------> ↓↓↓↓↓↓↓↓ <-------------------------------//
//Crear una funcion que devuelva true si es vocal y false si no lo es .

// let vocales = ["a","e","i","o","u"];

const esVocal = (string) => {
    let vocales = ["a", "e", "i", "o", "u"];


    for (let i = 0; i <= vocales.length; i++) {

        if (vocales[i].includes(string)) {

            return true;
        } else {

            return false
        }
    }
}

console.log(esVocal("z"));
console.log(esVocal("a"));

//-------------------------> ↓↓↓↓↓↓↓↓ <-------------------------------//

//Invertir una cadena
//Descripción: Escribe una función que tome una 
// cadena como entrada y devuelva la cadena 
// invertida.
let string = "hola a todos como estan"
const invertirString = (string) => {
    console.log(string);


    return string.split("").reverse().join("")
}


console.log(invertirString(string));

//-------------------------> ↓↓↓↓↓↓↓↓ <-------------------------------//

//6. Palíndromos
//Descripción: Comprueba si una palabra es un palíndromo 
// (se lee igual al derecho y al revés).

const capicua = (string) => {


    if (string == string.split("").reverse().join("")) {

        return true
    } else {
        return false
    }
}

console.log(capicua("radar"));

//-------------------------> ↓↓↓↓↓↓↓↓ <-------------------------------//

//FizzBuz 
// Escribe un programa que imprima los números del 1 al 100, pero:
//Para múltiplos de 3, imprime "Fizz".
//Para múltiplos de 5, imprime "Buzz".
//Para múltiplos de ambos, imprime "FizzBuzz".


const fizzBuzz = () => {

    let multiplosDeTres = [];
    let multiplosDeCinco = [];

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            // console.log("Fizz");
            multiplosDeTres.push(i)
           
        } else if (i % 5 === 0) {
            // console.log("Buzz");
            multiplosDeCinco.push(i)
          
        } else {
            // console.log("fizzBuzz");

        }

    }

    console.log(multiplosDeTres);
    console.log(multiplosDeCinco);
    
    

}

fizzBuzz()

console.log("---------------------------------------------------");

//-------------------------> ↓↓↓↓↓↓↓↓ <-------------------------------//

// ordenar los numeros de un array de manera ascendente


let ordenarNums = [1,2,3,4,5,6,7,8,9,5,4,2,3,5,4,7]

const ordernarNum = (array) =>{


    let result =  array.sort( (a,b) => a - b )
    return result 
}

console.log(ordernarNum(ordenarNums))

console.log("---------------------------------------------------");


//-------------------------> ↓↓↓↓↓↓↓↓ <-------------------------------//

//Funcion que recorre un array y mete en otro los elementos que no estan repetidos 

let numeroRepetidos = [1,2,5,4,1,2,5,8,7,8,9,6,3,2,1,5,4,7,8,5,2,1,4,2,3,6,6,5,8,7,4,10,50,45,789]

const noRepetidos = (array) =>{

    let nuevoArray = [];
    

    for (let i = 0; i < array.length; i++) {
        // Verificar si el número está una sola vez en el arreglo original
        if (array.filter(num => num === array[i]).length === 1) {
            nuevoArray.push(array[i]);
        }
    }
    
    return nuevoArray
}

//  noRepetidos(numeroRepetidos)

 console.log(noRepetidos(numeroRepetidos));
 


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

const calcularImpuesto = (edad , ingresos) =>{

    if(edad >= 18 && ingresos >= 1000){
        
        return ingresos * 50 / 100
    } else {

        return 0
    }
}

console.log(calcularImpuesto(25,2000));

//-------------------------> ↓↓↓↓↓↓↓↓ <-------------------------------//




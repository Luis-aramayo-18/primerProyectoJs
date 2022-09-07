//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
//11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

const num1 = Number(prompt("dame un numero"));

if (num1 % 2 === 0) {console.log(" " + num1 / 2);}
else if (num1 % 3 === 0) {console.log(" " + num1 / 3);}
else if (num1 % 5 === 0) {console.log(" " + num1 / 5);}
else if (num1 % 7 === 0) {console.log(" " + num1 / 7);}
else {
    console.log("el valor ingresado no es divisible");
}

//const num1 = Number(prompt("dame un numero"));

//if (num1 % 2 === 0 || num1 % 3 === 0 || num1 % 5 === 0 || num1 % 7 === 0){
    //console.log("" + num1/2);
    //console.log("" + num1/3);
    //console.log("" + num1/5);
    //console.log("" + num1/7);
//}

//else{
    //console.log("el valor ingresado no es divisble");
//}
  
//8.- Escribe un programa que pida un número y diga si es divisible por 2

const num1 = Number(prompt("dame un numero"));

if (num1 % 2 === 0) {
  console.log(" " + num1 / 2);
} else {
  console.log("el valor ingresado no es divisible por 2");
}

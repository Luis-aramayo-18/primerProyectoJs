//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

const num1 = Number(prompt("dame el primer numero"));
const num2 = Number(prompt("dame el segundo numero"));
const num3 = Number(prompt("dame el tercer numero"));

if(num1>num2 && num1>num3){
    console.log(" " + Number(num1))
}
else if(num2>num1 && num2>num3){
    console.log(" " + Number(num2))
}
else{
    console.log(" " + Number(num3))
}
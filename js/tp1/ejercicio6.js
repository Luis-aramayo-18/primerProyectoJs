//6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

const num1 = Number(prompt("dame el primer numero"));
const num2 = Number(prompt("dame el segundo numero"));

if(num1>num2){
    console.log("" + Number(num1))
}

else if(num1===num2){
    console.log("Son iguales")
}

else{
    console.log(" " + Number(num2))
}
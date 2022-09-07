/*1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje. Repetir hasta que el usuario toque cancelar*/
while(true){
    const edad = prompt("ingrese la edad")

    if(edad===null) break;
    if(edad>=18){
        console.log("puede manejar")
    }
    else{
        console.log("no puede manejar")
    }
}

console.log("hasta luego")

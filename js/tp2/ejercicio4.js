/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/
let suma = 0;

while (true) {
  const num = prompt("dame un numero");
  if (num === null) break;
  else {
    if(typeof Number(num) === "number"){
        suma = Number(suma) + num
    }
    else{
        alert("debe ingresar un numero")
    }
  }
}
alert("La suma es " + Number(suma));

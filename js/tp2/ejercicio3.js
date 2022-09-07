/*3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp*/
let cadena=""
while(true){
    const texto = prompt("ingrese un texto")
    if(texto==null) break;
   cadena = cadena + palabra + "-"
}

console.log(cadena)
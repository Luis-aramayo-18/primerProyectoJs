/*15- Realiza un script que cuente el número de vocales que tiene un texto.*/

let texto = prompt("ingrese un texto")
texto = texto.toUpperCase()
let vocal = ""
let contador = 0

for(let i=0;i<cadena.length;i++){
    vocal = texto.charAt(i)

    if(
    vocal === "A" ||
    vocal === "E" ||
    vocal === "I" ||
    vocal === "O" ||
    vocal === "U"
    ) {
        contador++
    }
}



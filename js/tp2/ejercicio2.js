/*2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
*/

while (true) {
  const notas = prompt("ingrese un numero");
  if (notas === null) break;
  else {
    if (notas < 0 || notas > 10) {
      alert("El numero ingresado no es valido, ingrese un numero del 0 al 10");
    } else {
      if (Number(notas) <= 2) {
        alert("muy deficiente");
      } else if (Number(notas) > 2 && notas <= 4) {
        alert("insuficiente");
      } else if (Number(notas) > 4 && notas <= 6) {
        alert("suficiente");
      } else if (Number(notas) === 7) {
        alert("bien");
      } else if (Number(notas) > 7 && notas <= 9) {
        alert("notable");
      } else {
        alert("sobresaliente");
      }
    }
  }
}

alert("hasta luego");

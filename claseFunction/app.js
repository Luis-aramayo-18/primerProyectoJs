import { factorial, primeraAMayusucula, validarEmail } from "./utils.js";

const resultadoFactorial = factorial(8)

console.log(resultadoFactorial)


const str = "hola soy eze "

// const datos = `su nombre es${texto y tiene ${texto2 años}}`
//console.log(datos)

const email = "lucho@hotmail.com"
const emailvalidado = validarEmail(email)

if(emailvalidado) console.log("email valido")
else console.log("email no valido")

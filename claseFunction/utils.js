// 8! = 8*7*6*5*4*3*2*1

export function factorial(numero){
    //numero = numero * (numero-1)

    let res=1;

    for (let i = numero; i>0; i--){
        res=res*i
    }

    return res;
}

//funcion para poner primera letra de un string en mayuscula

//1 recibir cadena
//2 separarmos la primera letra
//3 la ponemos en mayus
//4 dejar el resto de la cadena en minusculas
//5 volvemos a armar la cadena
//6 devolver el valor

export const primeraAMayusucula = (cadena) => {
    let primeraLetra = cadena.charAt(0);
    primeraLetra = primeraLetra.toUpperCasse()
    console.log(primeraLetra)

    let cadenaEnMinuscula = cadena.toLowercase()
    console.log(cadenaEnMinuscula)
    
    cadenaEnMinuscula = cadenaEnMinuscula.slice(1)
    console.log(cadenaEnMinuscula)

    const cadenaResultante = primeraLetra + cadenaEnMinuscula
    console.log(cadenaResultante)

    return cadenaResultante
}

primeraAMayusucula("hola soy eze")


 export const validarEmail = (email) => {
    const regex = 

    if(email.text(regex)){
        //console.log("cumple el patron")
        return true
    } else{
        //console.log("no cumple el patron")
        return false
    }
}


/*Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.*/


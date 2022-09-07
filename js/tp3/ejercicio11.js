/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp*/

let nombre1,edad1,nombre2,edad2,nombre3,edad3

    while(true){
       nombre1 = prompt("ingrese primer nombre")
       edad1 = prompt("ingrese primera edad")
       
       if(edad1!==null && !isNaN /*isInterger(number)*/(edad1) && edad1>=0){
           edad1 = Number(edad1)
           break
       } 
       }

       while(true){
        nombre2 = prompt("ingrese segundo nombre")
        edad2 = prompt("ingrese segunda edad")
        
        if(edad2!==null && !isNaN(edad2) && edad2>=0){
            edad2 = Number(edad2)
            break
        } 
        }

        while(true){
            nombre3 = prompt("ingrese tercer nombre")
            edad3 = prompt("ingrese tercer edad")
            
            if(edad3!==null && !isNaN(edad3) && edad3>=0){
                edad3 = Number(edad3)
                break
            } 
            }

            const mayor = math.max(edad1,edad2,edad3)
            console.log(mayor)

            if (mayor === edad1){
                console.log("el de mayor edad es " + nombre1)
            } else if (mayor === edad2){
                console.log("el de mayor edad es " + nombre2)
            } else{
                console.log("el de mayor edad es" + nombre3)
            }

//FUNCION

/*function calcArea(base, altura){
    const resultado = base * altura
    return resultado
}

const areaTotal = calcArea(10.20)
console.log(areaTotal)*/

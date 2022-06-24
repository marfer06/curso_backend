// ejemplos de arrow functions:


const sumar = (a, b) => a + b;
let op1 =
 46; op2 = 23;
 let suma = sumar(op1, op2);

    console.log(`la suma de ${op1} mas $ {op2}  es: ${sumar}`);

    //---------- con llaves : multiples lineas de intruciones -------------------
    const restar = (a, b) => {
     let res = a - b;
     return res; 
    }

    console.log(`la resta de ${op1} menos ${op2} es: ${restar(op1, op2)}`);

    //---------- sin paretesis un solo argumento -------------------

    const multiplicar = a => a * 2;
    console.log(`el doble de ${op1} es: ${multiplicar(op1)}`);

    //---------- cuando una arrow function retorna un objeto  en una intruccion
    // esta debe ir entre parentesis  -------------------

    const getPersona = () => ({nombre: "juan", apellido: "perez"});
    console.log(getPersona());



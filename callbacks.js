function escribirylog(texto, callbackparalog) {
    // simmulamos que escribimos en un archivo  
    console.log(texto);
    // al finalizar , ejecutamos la funcion callback
    callbackparalog(` ARCHIVO escrito con exito `);
}

escribirylog("hola mundo", (smsparalog) => {
    const fecha = new Date().toLocaleDateString();
    console.log(`${fecha} : ${smsparalog}`);

});


//actividad 

function operation(num1, num2, callbackparalog) {
    let resultado = num1 + num2;
    callbackparalog(resultado);
}


operation(1, 2, (resultado) => {
    console.log(resultado);
});  // resultado = 3

function resta(num1, num2, callbackparalog) {
    let resultado = num1 - num2;
    callbackparalog(resultado);
}
resta(10, 2, (resultado) => {
    console.log(resultado);
});  // resultado = 8

function multiplicacion(num1, num2, callbackparalog) {
    let resultado = num1 * num2;
    callbackparalog(resultado);
}
divicion(10, 2, (resultado) => {
    console.log(resultado);
});  // resultado = 5


function divicion(num1, num2, callbackparalog) {
    let resultado = num1 / num2;
    callbackparalog(resultado);
}
divicion(10, 2, (resultado) => {
    console.log(resultado);
});  // resultado = 5
function resto(num1, num2, callbackparalog) {
    let resultado = num1 % num2;
    callbackparalog(resultado);
}
resto(10, 2, (resultado) => {
    console.log(resultado);
});  // resultado = 5
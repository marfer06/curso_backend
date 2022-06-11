// let nombre = "pepe";

// console.log(nombre);

// let edad = 26;
// console.log(edad + 1);

// const pelis = ["enero", "febrero", " marzo"];

// pelis.push("abril")
// console.log(pelis);

// const series = [
//     {
//         nombre: "fer ",
//         ano: 2012,
//         protagonistas: "lalaaal",

//     },
//     {
//         nombre: "superman ",
//         ano: 2016,
//         protagonistas: "lalaaal",

//     },
//     {
//         nombre: "batman  ",
//         ano: 2015,
//         protagonistas: "lalaaal",

//     },



// ];
// series.push({
//     nombre: "maria ",
//     ano: 2022,
//     protagonistas: "lalasssaal",

// }
// )
// console.log(series);

// console.log("recibir un nombre")


// function mostrarlista(lisdata) {


//     if (true) {
//         console.log("gracias : " + lisdata)


//     } else {
//         console.log("no fue recibido")

//     }

// }




// mostrarlista("fer");





// var primera = 1;



// class cliente {
//     constructor(nombre, fecha, libros, mascotas) {
//         this.nombre = String;
//         this.apellido = String;
//         this.libros = Object[];
//         this.mascotas= String[];

//     }
// }

// class cliente {
//     CONSTRUCTOR(nombre, apellido, libros, mascotas) {

//         this.nombre = MARCELO;   
//         this.apellido = TIRON;

//         this.libros = ["LA MANCHA" , "TAIL"," EL PRINCIPE DE NAPOLEON"];

//         this.mascotas = ["perro", "gato", "pez"];
//     }};

//     var cliente1 = new cliente("juan", "perez", ["libro1", "libro2"], ["perro1", "perro2"]);
//     var cliente2 = new cliente("juan", "perez", ["libro1", "libro2"], ["perro1", "perro2"]);
//     console.log(cliente1.apellido);
//     console.log(cliente2.nombre);

//     var cliente3 = new cliente("juan", "perez", ["libro1", "libro2"], ["perro1", "perro2"]);            
//     console.log(cliente3);
    
//      LET getFullName = function () {  console.log(cliente1.nombre); }   //funciones

    
//     getFullName();

const add = (function() {
    let counter = 0;
    return function () { counter += 1; return counter}
})();

console.log(add()); // 0 + 1 = 1
console.log(add()); // 1 + 1 = 2
console.log(add()); // 2 + 1 = 3
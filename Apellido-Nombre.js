class usuario {
    constructor(nombre, apellido, mascotas, libros,) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascotas = [];
        this.libros = [];
    }



    addMascota(mascotas) {
        this.mascotas.push(mascotas);
    }

    getfullname() {
        return this.nombre + " " + this.apellido;
    }
    countspets() {
        return this.mascotas.length;
    }
    addbook(libros, autor) {

        let libronuevo = {
            nombre: libros,
            autor: autor,
        }
        this.libros.push(libronuevo);
    }
    
    getbooknames() { return this.libros.map(libro => libro.nombre); }    
}


let usuario1 = new usuario("Juan", "Perez",);

usuario1.addMascota("perro");    
usuario1.addbook("harry potter", "fer");
usuario1.addbook("el señor de los anillos ", "marcela");
console.log(usuario1.getbooknames());
console.log(usuario1.countspets());
console.log(usuario1.getfullname());




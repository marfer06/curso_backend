




class contenedor  {
  constructor(id, nombre, direccion,  precio) {
    this.id = id+1;
    this.nombre = nombre;
    this.tipo = direccion;
    this.precio = precio;
  }
  save() {
    let data = {
      id: this.id,
      nombre: this.nombre,
      tipo: this.tipo,
      precio: this.precio,
    };
    var fs = require('fs');
    fs.writeFileSync('./contenedores.json', JSON.stringify(data),function(err) {
      if (err) throw err;
      console.log("Guardado!")});

    }

  
  getById(id) {
    let contenedores = JSON.parse(fs.readFileSync('./contenedores.json'));
    return contenedores.find(contenedor => contenedor.id === id);
  } 
  getAll() {
    let contenedores = JSON.parse(fs.readFileSync('./contenedores.json'));
    return contenedores;
  }
  deleteById(id) {
    let contenedores = JSON.parse(fs.readFileSync('./contenedores.json'));
    let contenedor = contenedores.find(contenedor => contenedor.id === id);
    contenedores.splice(contenedores.indexOf(contenedor), 1);
    fs.writeFileSync('./contenedores.json', JSON.stringify(contenedores));  
  }
deleteAll() {
    let contenedores = JSON.parse(fs.readFileSync('./contenedores.json'));
    contenedores = [];
    fs.writeFileSync('./contenedores.json', JSON.stringify(contenedores));
  }


}




  
let usuario = new contenedor ("mariano ; se letras ; se usuario ; series ")

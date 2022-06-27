const express = require('express');
const app = express();
const fs = require("fs")
const port = 8080;
const Contenedor = require("../Mariano-ferrisi-Entrega2.1.js")

/* Contenedor*/
const archivo = new Contenedor ("../productos.txt");
const getProductos= archivo.getAll();

/*Routes*/
app.get('/productos', (req, res) => {
    const producto = await getProductos
    res.send(producto);
})
app.get('/productosRandom', (req, res) => {
    res.send("Hace frio!");
})

app.get("/productoRandom", async (req, res) => {
    const resultado = await getProductos;
    const aleatorio= resultado[Math.floor(Math.random() * resultado.length)];
    res.send(aleatorio) 
})

app.listen(port, () => {
    console.log("Tu servidor esta corriendo en el puerto: " + port);
})

app.on("error", error => console.log("El error es: " + error));





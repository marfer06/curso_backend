const arraprueba = [
    {id: 1, name: "lapiz ", precio: 20},
     { id: 2, name: "goma ", precio: 30},
    { id: 3, name: "regla ", precio: 40},

];

const datosobjeto = (obj) => {
    const res = {}
    res.names  = []
    const precios = []
    res.precioTotales = 0
    obj.forEach(element => {
        res.names.push(element.name)
        precios.push(element.precio)
        res.precioTotales += element.precio

    });
    res.precioProm = Math.round(res.precioTotales / obj.length, 2),
        res.precioMax = Math.max(...precios)
        res.precioMin = Math.min(...precios)
        console.log(res);


};


datosobjeto(arraprueba);
const htttp = require()
 const fecha = new Date.toString();
 const saludo = (HORA)=>{
    if (HORA>=6&&HORA<=12){return "buenas noches"}
   else if  (HORA>=13&&HORA<=19){return "buenas tardes"
   } else {return "buenas noches"
    }
 }

const server = htttp.createServer(( req, res ) => {respuesta.end (fecha)})

const connectorServer= server.listen (8080,() =>{console.log("Servidor escuchando en: " + connectedServer.address().port);
})
class contador {


    static contador_global = 0
    constructor(nombre
    ) {

        this.nombre = nombre;
        this.contador = 0;

    }
    obtener_resposable() {
        return this.nombre;
    }

    contar_individual() {
        return this.contador;
    }


    contar_global() {
        return  contador.contador_global;
    }
    contar() {
        this.contador ++;
        contador.contador_global ++;
    }






}


let contador1 = new contador("juan");
let contador2 = new contador("pedro");
console.log(contador.contador_global);
contador1.contar(1);
contador2.contar(2);
console.log(contador.contador_global);
console.log(contador1.contar_individual());
console.log(contador2.contar_individual());
console.log(contador1.obtener_resposable());
console.log(contador2.obtener_resposable());
console.log(contador1.contar_global());
console.log(contador2.contar_global());
console.log(contador1.contar());
 

class Persona{
    constructor(nombre,edad){
        this.nombre;
        this.edad;
    }
    saludo(){
        return `Hola soy ${this.nombre} y tengo ${this.edad}`;
    }
    getNombre(){
        return this.nombre;
    }
    getEdad(){
        return this.edad;
    }
}

export {Persona};

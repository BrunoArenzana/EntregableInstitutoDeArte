
export class Persona {
    protected nombre: string;
    protected apellido: string;
    protected edad: number;

    constructor(pNombre: string, pApellido: string, pEdad: number) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.edad = pEdad;
    }
    public presentacion() {
        console.log(`Mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`)
    }
    public getNombre() {
        return this.nombre;
    }
    public getApellido() {
        return this.apellido;
    }
    public getEdad() {
        return this.edad;
    }
    public setNombre(pNombre: string) {
        this.nombre = pNombre;
    }
    public setApellido(pApellido: string) {
        this.apellido = pApellido;
    }
    public setEdad(pEdad: number) {
        this.edad = pEdad;
    }
}
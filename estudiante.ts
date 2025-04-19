import { Persona } from "./persona";

export class Estudiante extends Persona{

    protected nivel: number;

    constructor(pNombre: string, pApellido: string, pEdad: number,pNivel: number) {
        super(pNombre, pApellido, pEdad)
        this.nivel = pNivel;
    }
    public presentacion(): void {
        console.log(`Mi nombre es ${this.nombre} ${this.apellido} soy alumno y tengo ${this.edad} años y actualmente tengo un nivel de ${this.nivel}`)
    }
    public setNivel(pNivel:number) {
        this.nivel=pNivel;
    }
    public getNivel() {
    return this.nivel;
    }
}
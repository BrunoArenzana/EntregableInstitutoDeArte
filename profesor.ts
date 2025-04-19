import { Persona } from "./persona";

export class Profesor extends Persona{
    protected especialidad: string;

    constructor(pNombre: string, pApellido: string, pEdad: number, pEspecialidad: string) {
        super(pNombre, pApellido, pEdad);
        this.especialidad = pEspecialidad;
    }

    public presentacion(): void {
        console.log(`Mi nombre es ${this.nombre} ${this.apellido} \n soy Profesor y tengo ${this.edad} años\n me especializo en ${this.especialidad}`)
    }

    public setEspecialidad(pEspecialidad: string) {
        this.especialidad = pEspecialidad;
    }
    public getEspecialidad() {
        return this.especialidad;
    }
}
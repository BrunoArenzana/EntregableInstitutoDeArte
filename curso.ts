import { Estudiante } from "./estudiante"
import { Profesor } from "./profesor"

export class Curso {
    private estudiantes: Estudiante[];
    public nombreCurso: string;
    protected descripcion: string;
    protected responsable: Profesor;

    constructor(pNombreCurso: string, pDescripcion: string, pResponsable: Profesor) {
        this.estudiantes = [];
        this.nombreCurso = pNombreCurso;
        this.descripcion = pDescripcion;
        this.responsable = pResponsable;
    }

    public addAlumno(alumno: Estudiante) {
        this.estudiantes.push(alumno);
    }

    public mostrarInfoCurso() {
        console.log(`El Curso de ${this.nombreCurso} \n Descripcion Breve: ${this.descripcion} \n Docente Encargado: - ${this.responsable.getNombre()} ${this.responsable.getApellido()} -`)
        this.listarAlumnos() + `\n`; 
        console.log(`\n`);
        // y los estudiantes${this.estudiantes.map(e=>e.getApellido())}
    }

    public listarAlumnos() {
        for (let i = 0; i < this.estudiantes.length; i++) {
            console.log(`Alumno ${i + 1}: ${this.estudiantes[i].getNombre()+` `+ this.estudiantes[i].getApellido()}`);
        }
    }
    
    public setEstudiantes(pEstudiante: []) {
        this.estudiantes = pEstudiante;
    }
    public getEstudiantes() {
        return this.estudiantes;
    }
    public setNombreCurso(pNombreCurso: string) {
        this.nombreCurso = pNombreCurso;
    }
    public getNombreCurso() {
        return this.nombreCurso;
    }
    public setDescripcion(pDescripcion: string) {
        this.descripcion = pDescripcion;
    }
    public getDescripcion() {
        return this.descripcion;
    }
    public setResponsable(pResponsable: Profesor) {
        this.responsable = pResponsable;
    }
    public getResponsable() {
        return this.responsable;
    }
}

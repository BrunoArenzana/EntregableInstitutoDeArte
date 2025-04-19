import { Curso } from "./curso";

export class Instituto {

    private cursos: Curso[] = []

    constructor() {
        this.cursos.push();
    }


    public addCurso(curso: Curso) {
        this.cursos.push(curso)
        
    }
    public mostrarCursosDisponibles() {
        //console.log(this.cursos)
        this.cursos.forEach(cursos => {
            cursos.mostrarInfoCurso()
        });
    }
    public addDocente() {
    
    }
    public listarAlumnosDeCurso(nombreDeCurso: string): void {
        const cursoEncontrado = this.cursos.find(curso => curso.nombreCurso === nombreDeCurso);

        if (cursoEncontrado) {
            console.log(`Lista de alumnos del curso "${nombreDeCurso}":`);
            cursoEncontrado.listarAlumnos();
        } else {
            console.log(`No se encontró el curso "${nombreDeCurso}".`);
        }
    }
    public setCurso(pCurso: []) {
        this.cursos = pCurso;
    }
    public getCurso() {
        return this.cursos;
    }


    
}
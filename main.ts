import { Curso } from "./curso";
import { Instituto } from "./instituto";
import { Persona } from "./persona";
import { Profesor } from "./profesor";
import { Estudiante } from "./estudiante";

//instancio el instituto
const InstitutoInmaculada = new Instituto();

//instancio los profesores
const profesor1 = new Profesor("Carla", "Michelleng", 51, "Cromatismo");
const profesor2 = new Profesor("Federico", "Flensborg", 41, "Paisajismo");
const profesor3 = new Profesor("Enrique", "Alvarez", 39, "Pinturas Ruprestes");

//instancio los estudiantes
const estudiante1 = new Estudiante("María", "García", 21, 3)
const estudiante2 = new Estudiante("Alan", "Gomez", 20, 1)
const estudiante3 = new Estudiante("Marcos", "Losteau", 20, 2)
const estudiante4 = new Estudiante("Natalia", "Belvet", 24, 3)
const estudiante5 = new Estudiante("Florencia", "Sumarraga", 26, 2)
const estudiante6 = new Estudiante("Iris", "Griffioen", 17, 1)
const estudiante7 = new Estudiante("Graciela", "De Lorean", 18, 1)
const estudiante8 = new Estudiante("Adelmar", "Marquestau", 21, 2)
const estudiante9 = new Estudiante("Ruperto", "Hernandez", 33, 3)
const estudiante10 = new Estudiante("Martin", "Gaime", 31, 3)

//instancio los cursos
const cursoPintura = new Curso("Paisajismo", "Historia y desarrollo de las tecnicas de pintura", profesor2);
const cursoColores = new Curso("Cromatismo", "Repaso, mezcla y desarrolo del circulo cromatico", profesor1);
const cursoCollage = new Curso("Collage", "Tecnicas de collage Pro", profesor3);

//agrego los alumnos a los cursos creados anteriormente
cursoCollage.addAlumno(estudiante1);
cursoCollage.addAlumno(estudiante2);
cursoCollage.addAlumno(estudiante3);
cursoCollage.addAlumno(estudiante4);
cursoColores.addAlumno(estudiante5);
cursoColores.addAlumno(estudiante6);
cursoColores.addAlumno(estudiante7);
cursoPintura.addAlumno(estudiante8);
cursoPintura.addAlumno(estudiante9);
cursoPintura.addAlumno(estudiante10);

//agrego los cursos al instituto
InstitutoInmaculada.addCurso(cursoCollage);
InstitutoInmaculada.addCurso(cursoColores);
InstitutoInmaculada.addCurso(cursoPintura);

// Mostrar presentaciones de profesores
console.log("=== PRESENTACIÓN DE PROFESORES ===");
//Polimorfismo metodo Presentacion en clase profesor
profesor1.presentacion();
profesor2.presentacion();
profesor3.presentacion();
console.log("----------------------------------");

//Mostrar presentaciones de estudiantes
console.log("=== PRESENTACIÓN DE ESTUDIANTES ===");
//polimorfismo metodo presentacion en clase estudiante
estudiante1.presentacion();
estudiante2.presentacion();
estudiante3.presentacion();
estudiante4.presentacion();
estudiante5.presentacion();
estudiante6.presentacion();
estudiante7.presentacion();
estudiante8.presentacion();
estudiante9.presentacion();
estudiante10.presentacion();
console.log("----------------------------------");

// Mostrar información de cursos
console.log("=== INFORMACIÓN DE TODOS LOS CURSOS ===");
//muestro informacion de los cursos disponibles
console.log(` `);
InstitutoInmaculada.mostrarCursosDisponibles();

// Listar alumnos de cada curso
//llamo al instituto, que tiene el metodo listarAlumnos y le digo de que Curso quiero esos alumnos
console.log(`-----------------------------------`)
InstitutoInmaculada.listarAlumnosDeCurso("Collage");
console.log(`-----------------------------------`)
InstitutoInmaculada.listarAlumnosDeCurso("Cromatismo");
console.log(`-----------------------------------`)
InstitutoInmaculada.listarAlumnosDeCurso("Paisajismo");

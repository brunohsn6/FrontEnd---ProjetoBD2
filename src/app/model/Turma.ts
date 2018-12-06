import { Disciplina } from "./Disciplina";
import { Professor } from "./Professor";
import { Aluno } from "./Aluno";

export class Turma {
    id: number;
    codigo: string;
    periodo: string;
    ano: Date;
    disciplina: Disciplina;
    professor: Professor;
    alunos: Array<Aluno>;
}
import { Departamento } from "./Departamento";

export class Curso {
   id: number;
   codigo: string;
   nome: string;
   horasObrigatorias: string;
   cargaHoraria: number;
    creditos: number;
    departamento: Departamento;
}

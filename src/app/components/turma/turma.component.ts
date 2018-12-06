import { AlunoService } from './../../services/aluno.service';
import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/model/Aluno';
import { Matricula } from 'src/app/model/Matricula';
import { Curso } from 'src/app/model/Curso';
import { Turma } from 'src/app/model/Turma';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { CursoService } from 'src/app/services/curso.service';
import { TurmaService } from 'src/app/services/turma.service';
import { Disciplina } from 'src/app/model/Disciplina';
import { Professor } from 'src/app/model/Professor';
import { ProfessorService } from 'src/app/services/professor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css'],
  providers: [TurmaService]
})
export class TurmaComponent implements OnInit {/*/implements OnInit*/

  codigo: string;
  periodo: string;
  ano: Date;
  
  alunos: Aluno[];
  disciplinas: Disciplina[];
  professores: Professor[];
  disciplinaSelected;
  professorSelected;


  constructor(private router: Router , private turmaService: TurmaService, private disciplinaService: DisciplinaService, private professorService: ProfessorService) { }

  ngOnInit() {
    this.carregarProfessores();
    this.carregarDisciplinas();
  }

  cadastroTurma() {
    const turma = new Turma;
    turma.codigo = this.codigo;
    turma.periodo = this.periodo;
    turma.ano = this.ano;
    const disc = new Disciplina();
    const prof = new Professor();
    disc.id = this.disciplinaSelected;
    prof.id = this.professorSelected;
    turma.disciplina = disc;
    turma.professor = prof;

    this.turmaService.cadastrarTurma(turma).subscribe(data => {
      console.log(data);
    },
      error => {
        console.log(error);
      }
    );
  this.codigo = '';
  this.periodo = '';
  this.ano = null;
  alert('Turma criada!');

  }

  carregarDisciplinas() {
    this.disciplinaService.carregarDisciplina().subscribe(data => {
      
      this.disciplinas = data;
    },
      error => {
        console.log(error);
      }
    );
    if(this.disciplinas.length == 0){
      alert("Voce nao pode cadastrar uma turma sem disciplinas cadastrados");
      this.router.navigateByUrl('/professor');
    }
  }

  carregarProfessores(){
    this.professorService.carregarProfessor().subscribe(data => {
      this.professores = data;
      this.carregarDisciplinas();
    },
      error => {
        console.log(error);
      }
      );
      if(this.professores.length == 0){
        alert("Voce nao pode cadastrar uma turma sem professores cadastrados");
        this.router.navigateByUrl('/professor');
      }
  }

}

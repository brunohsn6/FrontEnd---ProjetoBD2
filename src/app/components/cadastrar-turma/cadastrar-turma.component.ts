import { AlunoService } from './../../services/aluno.service';
import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/model/Aluno';
import { Matricula } from 'src/app/model/Matricula';
import { Curso } from 'src/app/model/Curso';
import { CursoService } from 'src/app/services/curso.service';
import { Router } from '@angular/router';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { TurmaService } from 'src/app/services/turma.service';
import { Turma } from 'src/app/model/Turma';


@Component({
  selector: 'app-cadastrar-turma',
  templateUrl: './cadastrar-turma.component.html',
  providers: [AlunoService]
})
export class CadastrarTurmaComponent implements OnInit {/*/implements OnInit*/

  disciplinas;
  alunos;
  turmas;
  turmaID;
  alunoID;


  constructor(private turmaService: TurmaService, private alunoService: AlunoService, private disciplinaService: DisciplinaService,  private router: Router) { }

  ngOnInit() {
    this.carregarTurma();
    this.carregarAlunos();

  }

  atualizar() {
    const t= new Turma();
    const a = new Aluno();
    t.alunos.push(a);
    this.turmaService.atualizar(t).subscribe(data=>{

    });
    alert("turma atualizada");
  }

  carregarAlunos() {
    this.alunoService.carregarAlunos().subscribe(data => {
      console.log(data);
      this.alunos = data;
      if(this.alunos.length == 0){
        alert("Voce nao pode cadastrar uma turma sem alunos cadastrados");
        this.router.navigateByUrl('/aluno');
      }
    }
    );
  }
  carregarTurma() {
    this.turmaService.carregarTurmas().subscribe(data => {
      this.turmas = data;
      if(this.turmas.length == 0){
        alert("nenhuma turma existente");
        this.router.navigateByUrl('/turma');
      }
    });
    
    
  }

}

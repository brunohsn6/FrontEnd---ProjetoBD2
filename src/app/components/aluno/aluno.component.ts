import { AlunoService } from './../../services/aluno.service';
import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/model/Aluno';
import { Matricula } from 'src/app/model/Matricula';
import { Curso } from 'src/app/model/Curso';
import { CursoService } from 'src/app/services/curso.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css'],
  providers: [AlunoService]
})
export class AlunoComponent implements OnInit {/*/implements OnInit*/

  nome: string;
  mat: string;

  alunos: Aluno[];
  cursos: Curso[];
  cursoSelected;
  cadastro = 'Cadastrado!';


  constructor(private alunoService: AlunoService, private cursoService: CursoService,  private router: Router) { }

  ngOnInit() {
    this.carregarCursos();

  }

  cadastroAluno() {
    
    const matricula1 = new Matricula();
    matricula1.matricula = this.mat;

    const aluno = new Aluno;
    aluno.nome = this.nome;
    aluno.matricula = matricula1;
    const curso = new Curso();
    curso.id = this.cursoSelected;
    aluno.matricula.curso = curso;

    this.alunoService.cadastrarAluno(aluno).subscribe(data => {
      this.cadastro = data.json();
      console.log(this.cadastro);
      this.cadastro =  'Cadastrado!';
    },
      error => {
        console.log(error);
      },
    )
    alert("Aluno cadastrado");
    this.nome='';
    this.mat='';
   
  }

  carregarAlunos() {
    this.alunoService.carregarAlunos().subscribe(data => {
      console.log(data);
      this.alunos = data;
    },
      error => {
        console.log(error);
      }
    );
  }
  carregarCursos() {
    this.cursoService.carregarCurso().subscribe(data => {
      this.cursos = data;
      if(this.cursos.length == 0){
        alert("Voce nao pode cadastrar um aluno sem cursos cadastrados");
        this.router.navigateByUrl('/curso');
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ProfessorService } from 'src/app/services/professor.service';
import { Professor } from '../../model/Professor';
import { Departamento } from 'src/app/model/Departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css'],
  providers: [ProfessorService]
})
export class ProfessorComponent implements OnInit { /*implements OnInit*/
  nome: string;
  matricula: string;
  departamentoID;
  professors: Professor[];
  departamentos;

  constructor(private professorService: ProfessorService, private departamentoService: DepartamentoService, private router: Router) { }

  ngOnInit() {
    this.carregarDeparts();
  }

   

  cadastroProfessor() {
    console.log(this.nome);
    console.log(this.matricula);

    const professor = new Professor;
    professor.nome = this.nome;
    professor.matricula = this.matricula;
    const dept = new Departamento();
    dept.id = this.departamentoID;
    professor.departamento = dept; 

      this.professorService.cadastrarProfessor(professor).subscribe(data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
    alert("professor cadastrado!");
    this.nome = '';
    this.matricula='';

  }

  carregarProfessor() {
    this.professorService.carregarProfessor().subscribe(data => {
      console.log(data);
      this.professors = data;
    },
    error => {
      console.log(error);
    }
  );
  }

  carregarDeparts() {
    this.departamentoService.carregarDepartamento().subscribe(data => {
      console.log(data);
      this.departamentos = data;
      if(this.departamentos.length == 0){
        alert("Voce nao pode cadastrar um professor sem departamentos cadastrados");
        this.router.navigateByUrl('/departamento');
      }
    },
    error => {
      console.log(error);
    }
  );
  }

}

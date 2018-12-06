import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from '../../services/disciplina.service';
import { Disciplina } from '../../model/Disciplina';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css'],
  providers: [DisciplinaService]
})
export class DisciplinaComponent implements OnInit{ /*implements OnInit */

  nome: string;
  codigo: string;
  disciplinas: Disciplina[];

  constructor(private disciplinaService: DisciplinaService) { }

  ngOnInit(): void {
   this.carregarDisciplinas();
  }
  cadastroDisciplina() {
    const disciplina = new Disciplina;
    disciplina.nome = this.nome;
    disciplina.codigo = this.codigo;
      this.disciplinaService.cadastrarDisciplina(disciplina).subscribe(data => {
       console.log(data);
      },
      error => {
        console.log(error);
      }
    );
    alert("Disciplina cadastrada!");
    this.codigo='';
    this.nome='';

  }

  carregarDisciplinas() {
    this.disciplinaService.carregarDisciplina().subscribe(data => {
      console.log(data);
      this.disciplinas = data;
    },
    error => {
      console.log(error);
    }
  );
  }

}

import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/model/Departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css'],
  providers: [DepartamentoService]
})
export class DepartamentoComponent {
  nome: string;
  codigo: string;

  departamentos;

  constructor(private departamentoService: DepartamentoService) { }


  cadastroDepartamento() {
    console.log(this.nome);
    console.log(this.codigo);

    const departamento = new Departamento;
    departamento.nome = this.nome;
    departamento.codigo = this.codigo;

    this.departamentoService.cadastrarDepartamento(departamento).subscribe(data => {
      console.log(data);
      
    },
      error => {
        console.log(error);
      }
    );
    alert("Departamento cadastrado!");
    this.nome = '';
    this.codigo = '';
  }

  carregarDepartamentos() {
    this.departamentoService.carregarDepartamento().subscribe(data => {
      console.log(data);
      this.departamentos = data;
    },
      error => {
        console.log(error);
      }
    );
  }

}

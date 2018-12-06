import { Curso } from '../model/Curso';
import { Injectable, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import { DepartamentoService } from './departamento.service';
import { Departamento } from '../model/Departamento';


@Injectable({
    providedIn: 'root'
  })
export class CursoService{
    departamentos: Departamento[];

    baseUrl = 'http://localhost:8080';
    cursoUrl = '/curso';

   

    constructor(private http: Http,
        private apiService: ApiService, private departamentoService: DepartamentoService) {
        }

    cadastrarCurso(curso: Curso) {
        // tslint:disable-next-line:max-line-length
        return this.http.post( this.baseUrl + this.cursoUrl + '/salvar', JSON.stringify(curso), this.apiService.getRequestOptions()).map(res => res.json());
    }

    carregarCurso() {
      return this.http.get( this.baseUrl + this.cursoUrl + '/listarTodos', this.apiService.getRequestOptions()).map(res => res.json());
  }
}

import { Disciplina } from '../model/Disciplina';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable({
    providedIn: 'root'
  })
export class DisciplinaService {

    baseUrl = 'http://localhost:8080';
    disciplinaUrl = '/disciplina';

    constructor(private http: Http,
        private apiService: ApiService) {
        }

    cadastrarDisciplina(disciplina: Disciplina) {
        // tslint:disable-next-line:max-line-length
        return this.http.post( this.baseUrl + this.disciplinaUrl + '/salvar', JSON.stringify(disciplina), this.apiService.getRequestOptions()).map(res => res.json());
    }

    carregarDisciplina() {
      return this.http.get( this.baseUrl + this.disciplinaUrl + '/listarTodos', this.apiService.getRequestOptions()).map(res => res.json());
  }
}

import { Aluno } from '../model/Aluno';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable({
    providedIn: 'root'
  })
export class AlunoService {

    baseUrl = 'http://localhost:8080';
    alunoUrl = '/aluno';

    constructor(private http: Http,
        private apiService: ApiService) {
        }

    cadastrarAluno(aluno: Aluno) {
        // tslint:disable-next-line:max-line-length
        return this.http.post( this.baseUrl + this.alunoUrl + '/salvar', JSON.stringify(aluno), this.apiService.getRequestOptions()).map(res => res.json());
    }

    carregarAlunos() {
      return this.http.get( this.baseUrl + this.alunoUrl + '/listarTodos', this.apiService.getRequestOptions()).map(res => res.json());
  }
}

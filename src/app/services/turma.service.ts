import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import { Turma } from '../model/Turma';

@Injectable({
    providedIn: 'root'
  })
export class TurmaService {

    baseUrl = 'http://localhost:8080';
    turmaUrl = '/turma';

    constructor(private http: Http,
        private apiService: ApiService) {
        }

    cadastrarTurma(turma: Turma) {
        // tslint:disable-next-line:max-line-length
        return this.http.post( this.baseUrl + this.turmaUrl + '/salvar', JSON.stringify(turma), this.apiService.getRequestOptions()).map(res => res.json());
    }

    carregarTurmas() {
      return this.http.get( this.baseUrl + this.turmaUrl + '/listarTodos', this.apiService.getRequestOptions()).map(res => res.json());
  }

    atualizar(turma:Turma){
        return this.http.put(this.baseUrl + this.turmaUrl + '/atualizar', JSON.stringify(turma), this.apiService.getRequestOptions()).map(res => res.json());
    }
}

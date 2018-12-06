import { Departamento } from '../model/Departamento';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable({
    providedIn: 'root'
  })
export class DepartamentoService {

    baseUrl = 'http://localhost:8080';
    departamentoUrl = '/departamento';

    constructor(private http: Http,
        private apiService: ApiService) {
        }

    cadastrarDepartamento(departamento: Departamento) {
        // tslint:disable-next-line:max-line-length
        return this.http.post( this.baseUrl + this.departamentoUrl + '/salvar', JSON.stringify(departamento), this.apiService.getRequestOptions()).map(res => res.json());
    }

    carregarDepartamento() {
      return this.http.get( this.baseUrl + this.departamentoUrl +'/listarTodos', this.apiService.getRequestOptions()).map(res => res.json());
  }
}

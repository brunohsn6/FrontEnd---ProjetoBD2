import { Injectable } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getRequestOptions(): RequestOptions {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new RequestOptions({ headers: headers });

  }

}

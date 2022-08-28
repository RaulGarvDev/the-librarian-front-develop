import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registro } from '../interfaces/registro';

const HOST = "88.1.205.136:9595"

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient) { }

  postUsuario(registro: Registro){
    return this.http.post(`${HOST}`,registro);
  }
}

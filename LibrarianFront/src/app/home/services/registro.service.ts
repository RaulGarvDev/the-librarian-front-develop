import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registro } from '../interfaces/registro';

const HOST = "https://git.heroku.com/thelibrarianback.git/auth/registro"

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient) { }

  postUsuario(registro: Registro){
    return this.http.post(`${HOST}`,registro);
  }
}

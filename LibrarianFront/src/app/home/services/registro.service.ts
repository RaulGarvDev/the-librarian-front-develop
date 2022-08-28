import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registro } from '../interfaces/registro';

const HOST = "https://thelibrarianback.herokuapp.com"

@Injectable({
  providedIn: 'root'
})


export class RegistroService {

  count:number =0;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Origin": "*",   
    } )
  };


  postUsuario(registro: Registro){
    this.count++;
     registro.id = this.count;
    
    return this.http.post(`${HOST}`,registro,this.httpOptions);

    
  }
}

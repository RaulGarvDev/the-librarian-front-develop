import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ChangePassword } from '../interfaces/registro';

const HOST = '88.1.205.136:9595/auth';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  private changePassword = environment.urlChangePassword;

 /* httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Origin": "*",
      
    } ),responseType: 'object' as 'json'
  };*/

  constructor(private http: HttpClient) {}

  postLogin(usuario: any) {
    return this.http.post(`${HOST}/login`, usuario);
  }

  logOut() {
    localStorage.removeItem('token');
  }

  isLogged() {
    return localStorage.getItem('token') != null;
  }

  getCurrentUser() {
    return this.http.get(`${HOST}/getCurrentUser`);
  }

  putChangePassword(changePasswordDTO: ChangePassword): Observable<any> {

   

    return this.http.put(`${this.changePassword}/${changePasswordDTO.email}/${changePasswordDTO.password}/${changePasswordDTO.newPassword}`, changePasswordDTO);


  }
}

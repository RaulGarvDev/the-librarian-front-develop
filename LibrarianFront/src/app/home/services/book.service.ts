import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VolumeInfoBD } from '../interfaces/addbookbd';
import { Books, Item } from '../interfaces/books';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private API_URL = environment.urlBooksRandom;

  private URLaddBook = environment.urlAddBook;

  private URLFindByIsbnDB = environment+"https://thelibrarianback.herokuapp.com";

  private URLFindBookByIdDB = environment.urlAllBooksByIdBD;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Origin": "*",   
    } )
  };



  constructor(private http: HttpClient) {

  }

  getRandomBooks(): Observable<Books> {

    return this.http.get<Books>(`${this.API_URL}/random`, this.httpOptions);
  }


  buscarLibroPorId(id: string): Observable<Item> {

    return this.http.get<Item>(`${this.API_URL}/getById/${id}`);

  }

  buscarLibroPorIdBD(id: number): Observable<Item> {

    return this.http.get<Item>(`${this.URLFindBookByIdDB}/${id}`);

  }


  buscarLibroPorIsbn(isbn: string): Observable<Books> {

    return this.http.get<Books>(`${this.API_URL}/searchByIsbn/${isbn}`);

  }

  searchBookByTitle(title: string): Observable<Books> {

    return this.http.get<Books>(`${this.API_URL}/searchByTitle/${title}`);

  }

  buscarLibroPorAuthor(author: string): Observable<Books> {

    // Ernest Hemingway
    return this.http.get<Books>(`${this.API_URL}/author/${author}`);
  }

  addBookBD(book: VolumeInfoBD):Observable<any> {

    return this.http.post(`${this.URLaddBook}`, book);

  }

  buscarLibroPorIsbnBD(isbn: string): Observable<any> {

    return this.http.get(`${this.URLFindByIsbnDB}/getByIsbn/${isbn}`);

  }





}

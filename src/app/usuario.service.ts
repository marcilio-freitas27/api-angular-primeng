import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url: string;
  constructor(private http:HttpClient) {
    this.url = "https://reqres.in/api/users?per_page=12";
  }

  getAll(): Observable<any>{
    return this.http.get(this.url);
  }

  getOne(): Observable<any>{
    return this.http.get(this.url);
  }

}

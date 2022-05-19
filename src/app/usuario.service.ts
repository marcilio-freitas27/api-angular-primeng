import { Usuario } from './usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url: string;
  constructor(private http:HttpClient) {
    this.url = "https://reqres.in/api/users";
  }

  getAll(): Observable<Usuario[]>{
    return this.http.get<Usuario>(`${this.url}?per_page=12`).pipe(
      map((retorno: any) => retorno.data)
    );
  }

  getOne(id:number): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.url}/${id}`).pipe(
      map((retorno: any) => retorno.data)
    );
  }

}

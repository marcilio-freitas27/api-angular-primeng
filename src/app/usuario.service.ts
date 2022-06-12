import { Usuario } from './usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Lista } from './model/lista';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url: string;
  minhaUrl: string;
  constructor(private http:HttpClient) {
    this.url = "https://reqres.in/api/users";
    this.minhaUrl = "http://localhost:3000/dados";
  }

  getAll(): Observable<Usuario[]>{
    return this.http.get<Usuario>(`${this.url}?per_page=12`).pipe(
      map((retorno: any) => retorno.data)
    );
  }

  getOne(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.url}/${id}`).pipe(
      map((retorno: any) => retorno.data)
    );
  }

  //pegando dados do banco
  getTudo(): Observable<Lista[]>{
    return this.http.get<Lista>(this.minhaUrl).pipe(
      map((retorno: any) => retorno[0])
    );
  }
}

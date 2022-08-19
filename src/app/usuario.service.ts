import { Usuario } from './usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Lista } from './model/lista';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url: string;
  minhaUrl: string;
  outraUrl: string;
  jwtauth:string;
  constructor(private http:HttpClient) {
    this.url = "https://reqres.in/api/users";
    this.minhaUrl = "http://localhost:3000/dados";
    this.outraUrl = "http://localhost:3000/cliente";
    this.jwtauth = "http://localhost:2000";
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

  //pegando dados do banco
  getTudoMssql(): Observable<any>{
    return this.http.get<any>(this.outraUrl);
  }

  getClientes(): Observable<any>{
    let token = localStorage.getItem('access_token')!;
    const headers = {
    'content-type': 'application/json',
    'x-access-token': token
    }
    return this.http.get<any>(`${this.jwtauth}/clientes`,{
      'headers': new HttpHeaders(headers)
    });
  }
}

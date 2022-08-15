import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  jwtauth: string;
  constructor(private http: HttpClient) {
    this.jwtauth = "http://localhost:3000/cliente";
  }

  onLogin(usuario: string, senha: string): boolean {
    if (usuario === 'admin' && senha === '1234') {
      localStorage.setItem('usuario', usuario);
      return true;
    }
    return false;
  }

  login(): Observable<any[]>{
    return this.http.post<any>(`${this.jwtauth}/login`);
  }

  isAuthenticated(): boolean{
    if (localStorage.getItem('usuario')){
      return true;
    }
    return false;
  }

  logout(): boolean {
    localStorage.removeItem('access_token');
    return true;
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }

  onLogout(): boolean {
    localStorage.clear();
    return true;
  }
}

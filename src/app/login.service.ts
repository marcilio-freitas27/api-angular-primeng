import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  jwtauth: string;
  setSession: any;
  postId: any;
  constructor(private http: HttpClient) {
    this.jwtauth = 'http://localhost:2000';
    this.setSession = '';
  }

  onLogin(usuario: string, senha: string): boolean {
    if (usuario === 'admin' && senha === '1234') {
      localStorage.setItem('usuario', usuario);
      return true;
    }
    return false;
  }

  login(usuario: any, senha: any): Observable<boolean> {
    return this.http
      .post<{token: string}>(`${this.jwtauth}/login`, { usuario: usuario , senha: senha })
      .pipe(
        map((result: { token: string; }) => {
          localStorage.setItem('access_token', result.token);
          return true;
        }))

  }

  getPostId(): any{
    return this.postId;
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem('usuario')) {
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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  jwtauth: string;
  constructor(private http: HttpClient) { 
    this.jwtauth = "http://localhost:2000";
  }

  onLogin(usuario: string, senha: string): boolean {
    if(usuario === 'admin' && senha === '1234'){
      localStorage.setItem('usuario', usuario);
      return true;
    }
    return false;
  }

  getLogin(): Observable<any[]>{
    return this.http.get<any>(`${this.jwtauth}`).pipe(
      map((retorno: any) => retorno.data)
    );
  }

  isAuthenticated(): boolean{
    if (localStorage.getItem('usuario')){
      return true;
    }
    return false;
  }

  onLogout(): boolean {
    localStorage.clear();
    return true;
  }
}

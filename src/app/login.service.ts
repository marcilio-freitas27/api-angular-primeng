import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  onLogin(usuario: string, senha: string): boolean {
    if(usuario === 'admin' && senha === '1234'){
      localStorage.setItem('usuario', usuario);
      return true;
    }
    return false;
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

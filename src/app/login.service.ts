import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  onLogin(usuario: string, senha: string): boolean {
    if(usuario === 'admin' && senha === '1234'){
      localStorage.setItem('usuario', usuario);
    }
    return true;
  }

  isAuthenticated(): boolean{
    if (localStorage.getItem('usuario')){
      return true;
    }else {
      return false;
    }
  }
}

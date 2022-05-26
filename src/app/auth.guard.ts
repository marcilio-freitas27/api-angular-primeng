import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private router: Router, private loginService: LoginService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    state: RouterStateSnapshot): boolean | UrlTree {
    if(this.loginService.isAuthenticated()){
      return true;
    }else {
      // return true;
      //retorna o login
      return this.router.parseUrl('/login');
    }
  }

}

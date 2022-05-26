import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = '';
  senha = '';
  mensagemErro = '';
  constructor(private loginService: LoginService, private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit():void {
    this.mensagemErro = '';
    if(this.loginService.onLogin(this.usuario, this.senha)){
      //redireciona para a raiz
      this.route.navigate(['/']);
    }else{
      this.mensagemErro = 'Usuário ou senha incorretos';
    }

  }

}

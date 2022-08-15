import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';
import { LoginService } from './../login.service';
import { Lista } from '../model/lista';

@Component({
  selector: 'app-usuario-listagem',
  templateUrl: './usuario-listagem.component.html',
  styleUrls: ['./usuario-listagem.component.css']
})
export class UsuarioListagemComponent implements OnInit {
  postId: any;
  usuarios: Usuario[];
  usuarioSelecionado?: Usuario;
  LoginService: any;
  //lista do banco
  listas: Lista[];
  teste: any[];
<<<<<<< HEAD
  novo:any[];
=======
  login: any[];
  clientes: any[];
>>>>>>> cfe422a1a94d971c91be45188016d55e0fe2c96b

  constructor(
    private usuario: UsuarioService, 
    private router: Router, 
    private loginService: LoginService
    ) {
    this.usuarios = [];
    this.listas = [];
    this.teste = [];
<<<<<<< HEAD
    this.novo = [];
    this.loginService.login('luiz', '123');
    this.postId = this.loginService.getPostId();
    console.log(this.postId);
=======
    this.login = [];
    this.clientes = [];
>>>>>>> cfe422a1a94d971c91be45188016d55e0fe2c96b
  }

  ngOnInit(): void {
    this.usuario.getAll().subscribe({
      next: (retorno: Usuario[]) => this.usuarios = retorno
    });
    // pegando dados do banco
    this.usuario.getTudo().subscribe({
      next: (retorno: Lista[]) => this.listas = retorno
    });

    //pegando do mssql
    this.usuario.getTudoMssql().subscribe({
      next: (retorno: any[]) => this.teste = retorno
    });

<<<<<<< HEAD
    this.usuario.getTudoMssql().subscribe({
      next: (retorno: any[]) => this.teste = retorno
    });

    this.usuario.login().subscribe({
      next: (retorno: any[]) => this.novo = retorno
    });
=======
    this.loginService.getLogin().subscribe({
      next: (retorno: any[]) => this.login = retorno
    })

    this.loginService.getLogin().subscribe({
      next: (retorno: any[]) => this.clientes = retorno
    })
>>>>>>> cfe422a1a94d971c91be45188016d55e0fe2c96b
  }

  //acessando rota de uma página(componente) através do router.navigate
  onRowSelect(event: any): void {
    this.router.navigate(['/detalhe', this.usuarioSelecionado!.id]);
  }

<<<<<<< HEAD
  onLogoff(): void{
    if(this.loginService.logout()){
=======
  onLogoff(): void {
    if (this.loginService.onLogout()) {
>>>>>>> cfe422a1a94d971c91be45188016d55e0fe2c96b
      this.router.navigate(['/login']);
    }
  }

}

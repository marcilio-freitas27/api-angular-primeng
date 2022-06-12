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

  usuarios: Usuario[];
  usuarioSelecionado?: Usuario;
  LoginService: any;
  //lista do banco
  listas: Lista[];

  constructor(private usuario: UsuarioService, private router:Router, private loginService: LoginService) {
    this.usuarios = [];
    this.listas = [];
  }

  ngOnInit(): void {
    this.usuario.getAll().subscribe({
      next: (retorno: Usuario[]) => this.usuarios = retorno
    });
    // pegando dados do banco
    this.usuario.getTudo().subscribe({
      next: (retorno: Lista[]) => this.listas = retorno
    });
  }

  //acessando rota de uma página(componente) através do router.navigate
  onRowSelect(event: any): void {
    this.router.navigate(['/detalhe', this.usuarioSelecionado!.id]);
  }

  onLogoff(): void{
    if(this.loginService.onLogout()){
      this.router.navigate(['/login']);
    }
  }

}

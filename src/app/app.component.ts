import { UsuarioService } from './usuario.service';
import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import { LocationStrategy } from '@angular/common';
import { Usuario } from './usuario';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'revisao';
  retorno:Usuario[];

  constructor(private usuario: UsuarioService){
    this.retorno = [];
  }

  listar(): void{
    this.usuario.getAll().subscribe({
      next: (retorno) => (this.retorno = retorno)
    })

  }

  listarUm(nome: string): void{
    this.usuario.getOne(nome).subscribe({
      next: (retorno) => (this.retorno = retorno)
    })

  }
}

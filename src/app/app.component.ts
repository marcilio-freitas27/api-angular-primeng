import { UsuarioService } from './usuario.service';
import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import { LocationStrategy } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'revisao';
  retorno:any;

  constructor(private usuario: UsuarioService){

  }


  listar(): void{
    this.usuario.getAll().subscribe({
      next: (retorno) => this.retorno = retorno;
    })

  }
}

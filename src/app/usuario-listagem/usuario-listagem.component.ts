import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuario-listagem',
  templateUrl: './usuario-listagem.component.html',
  styleUrls: ['./usuario-listagem.component.css']
})
export class UsuarioListagemComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private usuario: UsuarioService) {
    this.usuarios = [];
  }

  ngOnInit(): void {
    this.usuario.getAll().subscribe({
      next: (retorno: Usuario[]) => this.usuarios = retorno
    });

  }

}

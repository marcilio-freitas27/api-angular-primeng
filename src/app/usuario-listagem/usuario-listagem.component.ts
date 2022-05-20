import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-listagem',
  templateUrl: './usuario-listagem.component.html',
  styleUrls: ['./usuario-listagem.component.css']
})
export class UsuarioListagemComponent implements OnInit {

  usuarios: Usuario[];
  usuarioSelecionado?: Usuario;

  constructor(private usuario: UsuarioService, private router:Router) {
    this.usuarios = [];
  }

  ngOnInit(): void {
    this.usuario.getAll().subscribe({
      next: (retorno: Usuario[]) => this.usuarios = retorno
    });

  }

  onRowSelect(event: any): void {
    this.router.navigate(['/detalhe', this.usuarioSelecionado!.id]);
  }

}

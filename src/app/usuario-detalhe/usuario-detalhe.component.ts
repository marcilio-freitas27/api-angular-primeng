import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.component.html',
  styleUrls: ['./usuario-detalhe.component.css']
})
export class UsuarioDetalheComponent implements OnInit {

  id: number;
  usuario?: Usuario;

  //ler a informaçãa rota
  constructor(private activeRoute: ActivatedRoute, private servico: UsuarioService) {
    this.id = 0;
  }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id') ?
    parseInt(this.activeRoute.snapshot.paramMap.get('id')!) : 0;

    this.servico.getOne(this.id).subscribe({
      next: (usuarioRetorno: Usuario) => this.usuario = usuarioRetorno
    });
  }

}

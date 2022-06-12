import { UsuarioService } from './usuario.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
// import {ButtonModule} from 'primeng/button';
// import { LocationStrategy } from '@angular/common';
// import { Usuario } from './usuario';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'revisao';
  // retorno:Usuario[];
  items: MenuItem[];

  constructor(private usuario: UsuarioService){
    // this.retorno = [];
    this.items = [];
  }

  ngOnInit(): void {
    this.items = [
      {
          label: 'File',
          items: [{
                  label: 'New', 
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Project'},
                      {label: 'Other'},
                  ]
              },
              {label: 'Open'},
              {label: 'Quit'}
          ]
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      }
    ];
  }

  // listar(): void{
  //   this.usuario.getAll().subscribe({
  //     next: (retorno) => (this.retorno = retorno)
  //   })

  // }

  // listarUm(nome: string): void{
  //   this.usuario.getOne(nome).subscribe({
  //     next: (retorno) => (this.retorno = retorno)
  //   })
  //}

}

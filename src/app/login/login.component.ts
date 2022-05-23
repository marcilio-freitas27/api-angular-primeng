import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = '';
  senha = '';
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit():void {
    console.log('Tentou logar no sistema...')
    console.log(`Usuario: ${this.usuario}`)
    console.log(`Senha: ${this.senha}`)
  }

}

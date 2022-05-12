import { UsuarioService } from './usuario.service';
import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/button';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'revisao';

  constructor(private usuario: UsuarioService){

  }
}

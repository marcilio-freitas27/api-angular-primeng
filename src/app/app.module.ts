import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { UsuarioListagemComponent } from './usuario-listagem/usuario-listagem.component';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioListagemComponent,
    UsuarioDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

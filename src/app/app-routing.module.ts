import { UsuarioListagemComponent } from './usuario-listagem/usuario-listagem.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'listagem', component: UsuarioListagemComponent},
  {path: '', redirectTo: '/listagem', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

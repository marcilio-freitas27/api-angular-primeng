import { AuthGuard } from './auth.guard';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';
import { UsuarioListagemComponent } from './usuario-listagem/usuario-listagem.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  //proteção de autenticação gerando um guard chamado auth = AuthGuard(Schematics)
  {path: 'listagem', component: UsuarioListagemComponent, canActivate: [AuthGuard]},
  {path: 'detalhe/:id', component: UsuarioDetalheComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/listagem', pathMatch: 'full'},
  //rota default
];

@NgModule({
  //erro = estava forChild
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

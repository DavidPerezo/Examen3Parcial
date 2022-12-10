import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListadoMueblesComponent } from './components/listado-muebles/listado-muebles.component';
import { AgregarEditarMueblesComponent } from './components/agregar-editar-muebles/agregar-editar-muebles.component';
import { VerMueblesComponent } from './components/ver-muebles/ver-muebles.component';
const routes: Routes = [
  {path: '', redirectTo: 'listMuebles', pathMatch: 'full'},
  {path: 'listMuebles', component: ListadoMueblesComponent },
  {path: 'agregarMuebles', component: AgregarEditarMueblesComponent },
  {path: 'verMuebles/:id', component: VerMueblesComponent },
  {path: 'editarMuebles/:id', component: AgregarEditarMueblesComponent },
  {path: '**', redirectTo: 'listMuebles', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

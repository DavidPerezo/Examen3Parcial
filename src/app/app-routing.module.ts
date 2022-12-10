import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListadoMueblesComponent } from './components/listado-muebles/listado-muebles.component';
import { AgregarEditarMueblesComponent } from './components/agregar-editar-muebles/agregar-editar-muebles.component';

const routes: Routes = [
  {path: '/listMuebles', component: ListadoMueblesComponent },
  {path: '/agregarMuebles', component: AgregarEditarMueblesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

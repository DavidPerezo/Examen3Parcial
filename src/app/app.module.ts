import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEditarMueblesComponent } from './components/agregar-editar-muebles/agregar-editar-muebles.component';
import { ListadoMueblesComponent } from './components/listado-muebles/listado-muebles.component';
import { VerMueblesComponent } from './components/ver-muebles/ver-muebles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
// angular Material


@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarMueblesComponent,
    ListadoMueblesComponent,
    VerMueblesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

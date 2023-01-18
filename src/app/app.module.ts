import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibreriaComponent } from './libreria/libreria.component';
import { LibroComponent } from './libro/libro.component';
import { RegistrosComponent } from './registros/registros.component';
import { NuevoLibroComponent } from './nuevo-libro/nuevo-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    LibreriaComponent,
    LibroComponent,
    RegistrosComponent,
    NuevoLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

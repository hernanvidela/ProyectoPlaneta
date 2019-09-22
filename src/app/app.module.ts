import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { ListarComponent } from './Planetas/listar/listar.component';
import { CreateComponent } from './Planetas/create/create.component';
import { EditarComponent } from './Planetas/editar/editar.component';
import {FormsModule} from '@angular/forms';
import {ServiceService} from '../app/Service/service.service'
import {HttpClientModule} from '@angular/common/http';
import { EstrellasComponent } from './estrellas/estrellas.component';
import { ListarComponentEstrella } from './Estrellas/listar/listar.component';
import { CreateComponentEstrella } from './Estrellas/create/create.component';
import { EditarComponentEstrella } from './Estrellas/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetasComponent,
    ListarComponent,
    CreateComponent,
    EditarComponent,    
    EstrellasComponent,
    ListarComponentEstrella,
    EditarComponentEstrella,
    CreateComponentEstrella
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
      
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

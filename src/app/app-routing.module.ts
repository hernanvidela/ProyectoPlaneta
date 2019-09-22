import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Planetas/listar/listar.component';
import { CreateComponent } from './Planetas/create/create.component';
import { EditarComponent } from './Planetas/editar/editar.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { EstrellasComponent } from './estrellas/estrellas.component';
import { ListarComponentEstrella } from './Estrellas/listar/listar.component';
import { CreateComponentEstrella } from './Estrellas/create/create.component';
import { EditarComponentEstrella } from './Estrellas/editar/editar.component';


const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'create', component:CreateComponent},
  {path:'editar/:id', component:EditarComponent},  
  {path:'planetas',component:PlanetasComponent},
  {path:'estrellas', component:EstrellasComponent},  
  {path:'editarS', component:EditarComponentEstrella},  
  {path:'listarS', component:ListarComponentEstrella},
  {path:'createS', component:CreateComponentEstrella}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

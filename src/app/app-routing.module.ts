import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Planetas/listar/listar.component';
import { CreateComponent } from './Planetas/create/create.component';
import { EditarComponent } from './Planetas/editar/editar.component';
import { EliminarComponent } from './Planetas/eliminar/eliminar.component';


const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'create', component:CreateComponent},
  {path:'editar', component:EditarComponent},
  {path:'eliminar',component:EliminarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

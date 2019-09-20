import { Component } from '@angular/core';
import { ListarComponent } from './Planetas/listar/listar.component';
import { Router } from '@angular/router';
import { NullTemplateVisitor } from '@angular/compiler';
import { EditarComponent } from './Planetas/editar/editar.component';
import { EliminarComponent } from './Planetas/eliminar/eliminar.component';
import { CreateComponent } from './Planetas/create/create.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'planetas';

  constructor(private router:Router){}
   Planetas(){
     this.router.navigate(["planetas"])
   }
   Estrellas(){
     this.router.navigate(["estrellas"])
   }
   Listar(){
    this.router.navigate(["listar"]);
  }
  Create(){
    this.router.navigate(["create"]);
        }
  Editar(){
    this.router.navigate(["editar"])
  }
  Eliminar(){
    this.router.navigate(["eliminar"])
  }
  
}

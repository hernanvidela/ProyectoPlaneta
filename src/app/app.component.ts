import { Component } from '@angular/core';
import { Router } from '@angular/router';



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
  
}

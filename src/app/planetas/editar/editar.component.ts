import { Component, OnInit } from '@angular/core';
import { Planet } from '../../Modelo/Planet';
import { Router } from '@angular/router';
import {ServiceService} from '../../Service/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  planeta:Planet;
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.Editar();
  }
Editar(){
  let id = localStorage.getItem("id");
  this.service.getPlanetasId(+id)
  .subscribe(data=>{
    this.planeta = data;    
  })
}
Actualizar(planeta){  
  this.service.updatePlaneta(planeta)
  .subscribe(data=>{
    this.planeta=data;
    alert("se actualizo con exito");
    this.router.navigate(["listar"]);
  })
}
}

import { Component, OnInit } from '@angular/core';
import { Star } from '../../Modelo/Star';
import { Router } from '@angular/router';
import {ServiceService} from '../../Service/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponentEstrella implements OnInit {
  estrella:Star;
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.Editar();
  }
Editar(){
  let id = localStorage.getItem("id");
  this.service.getEstrellasId(+id)
  .subscribe(data=>{
    this.estrella = data;    
  })
}
Actualizar(estrella){  
  this.service.updateEstrella(estrella)
  .subscribe(data=>{
    this.estrella=data;
    alert("se actualizo con exito");
    this.router.navigate(["listarS"]);
  })
}
Cancelar(){
  this.router.navigate(['listarS']);
}

}

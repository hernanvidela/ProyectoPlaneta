import { Component, OnInit } from '@angular/core';
import { Star } from '../../Modelo/Star';
import { Router } from '@angular/router';
import {ServiceService} from '../../Service/service.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponentEstrella implements OnInit {
  estrella:Star = {
    id:null,
    name:"",
    density:null    
  } 
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
  }
Guardar(){    
this.service.createEstrella(this.estrella)
.subscribe(data=>{alert("se agrego con exito");
this.router.navigate(["listarS"]);
})
}
Cancelar(){
  this.router.navigate(['listarS']);
}
}

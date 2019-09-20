import { Component, OnInit } from '@angular/core';
import { Planet } from '../../Modelo/Planet';
import { Router } from '@angular/router';
import {ServiceService} from '../../Service/service.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  planeta:Planet = {
    id:null,
    name:"",
    size:null,
    estrella:null
  } 
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
  }
Guardar(){    
this.service.createPlaneta(this.planeta)
.subscribe(data=>{alert("se agrego con exito");
this.router.navigate(["listar"]);
})
}
}

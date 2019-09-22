import { Component, OnInit } from '@angular/core';
import { Planet } from '../../Modelo/Planet';
import { Router } from '@angular/router';
import {ServiceService} from '../../Service/service.service';
import { Star } from '../../Modelo/Star';



@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  planetas:Planet[];
  planeta:Planet;  
  constructor(private service:ServiceService, private router:Router) { }
  ngOnInit() {
    this.service.getPlanetas()
    .subscribe(data=>{
this.planetas=data;
    })    
  }
  Editar(id:number){   
       this.router.navigate(["editar/"+id]);
      }
  Eliminar(planeta:Planet){
    this.service.eliminarPlaneta(planeta)
    .subscribe(data=>{
      this.planetas=this.planetas.filter(p=>p!==planeta);
      alert("planeta eliminado");
    })
    
  }

}
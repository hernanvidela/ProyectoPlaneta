import { Component, OnInit } from '@angular/core';
import { Planet } from '../../Modelo/Planet';
import {ServiceService} from '../../Service/service.service';
import { Star } from '../../Modelo/Star';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  planeta:Planet;
  estrellas:Star[];
  estrella:Star;
  

  planet: Planet = {
    id: null,
    name: "",
    size: null,
    estrella:{
    id: null,
    name: "",
    density: null,
    },
}
errorFlag=false;
errorMessage="";
planetDTO: any = {
  "name": "",
  "size": null,
  "estrella": {
    "id": null
  }
}
  constructor(private service:ServiceService, private router:Router,private activeRoute:ActivatedRoute) { 
  this.activeRoute.params.subscribe((data)=>{
    console.log(data['id']);    
      this.getOne(data['id']);
    
  })
}
  ngOnInit() {
    this.service.getEstrellas().subscribe((data)=>{             
        this.estrellas=data;      
    });   
  }

  Actualizar(){
    this.activeRoute.params.subscribe((data)=>{
              this.update(data['id']);
      
    })
  }
  update(id: number){
    this.service.updatePlaneta(id, this.planetDTO).subscribe((data)=>{
      this.router.navigate(['listar']);
    });;
}
  
getOne(id: number){
  this.service.getPlanetasId(id).subscribe((data)=>{
    this.planet = data;
    this.planetDTO.name = data['name'];
    this.planetDTO.size = data['size'];
    this.planetDTO.estrella.id = data['estrella.id'];    
},
error=>{
  console.error("error");
  console.error(error);
}
);
}
Cancelar(){
  this.router.navigate(['listar']);
}
}

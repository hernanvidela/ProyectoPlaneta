import { Component, OnInit } from '@angular/core';
import { Planet } from '../../Modelo/Planet';
import { Router, ActivatedRoute} from '@angular/router';
import {ServiceService} from '../../Service/service.service';
import { Star } from '../../Modelo/Star';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  estrellas:Star[]=[];
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
  "estrella":null,
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
  
  Guardar(){
    this.service.createPlaneta(this.planetDTO).subscribe((data)=>{
      this.router.navigate(['listar']);
    },
    error=>{
      this.errorFlag = true;
      this.errorMessage = error.error['Error'];
      console.error("error");
      console.error(error.error);
    }
    );
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

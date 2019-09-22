import { Component, OnInit } from '@angular/core';
import { Star } from '../../Modelo/Star';
import { Router } from '@angular/router';
import {ServiceService} from '../../Service/service.service';



@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponentEstrella implements OnInit {
  estrellas:Star[];
  estrella:Star;
  constructor(private service:ServiceService, private router:Router) { }
  ngOnInit() {
    this.service.getEstrellas()
    .subscribe(data=>{
this.estrellas=data;
    })
  }
  Editar(estrella:Star){
   localStorage.setItem("id",estrella.id.toString());
    this.router.navigate(["editarS"]);
      }
  Eliminar(estrella:Star){
    this.service.eliminarEstrella(estrella)
    .subscribe(data=>{
      this.estrellas=this.estrellas.filter(p=>p!==estrella);
      alert("estrella eliminada");
    })
    
  }

}
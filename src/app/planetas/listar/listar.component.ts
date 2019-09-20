import { Component, OnInit } from '@angular/core';
import { Planet } from '../../Modelo/Planet';
import { Router } from '@angular/router';
import {ServiceService} from '../../Service/service.service';



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
  Editar(planeta:Planet){
   localStorage.setItem("id",planeta.id.toString());
    this.router.navigate(["editar"]);
  }

}
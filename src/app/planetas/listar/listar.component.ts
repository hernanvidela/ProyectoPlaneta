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
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getPlanetas()
    .subscribe(data=>{
this.planetas=data;
    })
  }

}

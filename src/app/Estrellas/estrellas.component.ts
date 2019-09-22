import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-estrellas',
  templateUrl: './estrellas.component.html',
  styleUrls: ['./estrellas.component.css']
})
export class EstrellasComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  Listar(){
    this.router.navigate(["listarS"]);
  }
  Create(){
    this.router.navigate(["createS"]);
  }
}

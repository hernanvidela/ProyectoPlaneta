import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Planet} from '../Modelo/Planet';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
planeta:Planet[];
  constructor(private http:HttpClient) { }

  Url='http://localhost:9000/api/v1/planets/';

  getPlanetas(){
    return this.http.get<Planet[]>(this.Url);
  }
}

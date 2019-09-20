import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Planet} from '../Modelo/Planet';
import { Observable } from 'rxjs';



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

   createPlaneta(planeta:Planet){
   console.log("hasta aca llego");
return this.http.post<Planet>(this.Url,planeta);
   }
   getPlanetasId(id:number){
    return this.http.get<Planet>(this.Url+id);
   }
   updatePlaneta(planeta:Planet){
     
     return this.http.put<Planet>(this.Url+planeta.id,planeta);
   }
   eliminarPlaneta(planeta:Planet){
     return this.http.delete<Planet>(this.Url+planeta.id);
   }
}

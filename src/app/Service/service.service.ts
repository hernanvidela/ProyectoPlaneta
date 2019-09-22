import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Planet} from '../Modelo/Planet';
import {Star} from '../Modelo/Star';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ServiceService {
planeta:Planet[];
  constructor(private http:HttpClient) { }

  Url='http://localhost:9000/api/v1/planets/';
  UrlEstrella='http://localhost:9000/api/v1/stars/';

  getPlanetas(){
    return this.http.get<Planet[]>(this.Url);
  }

   createPlaneta(planeta: any):Observable<Planet>{ 
      
return this.http.post<Planet>(this.Url,planeta);
   }
   getPlanetasId(id:number):Observable<Planet>{
    return this.http.get<Planet>(this.Url+id);
   }
   updatePlaneta(id:number, planeta: any):Observable<Planet>{
     
     return this.http.put<Planet>(this.Url+id,planeta);
   }
   eliminarPlaneta(planeta:Planet){
     return this.http.delete<Planet>(this.Url+planeta.id);
   }
   createEstrella(estrella:Star):Observable<Star>{    
 return this.http.post<Star>(this.UrlEstrella,estrella);
    }
   getEstrellas():Observable<Star[]>{
    return this.http.get<Star[]>(this.UrlEstrella);
  }
  getEstrellasId(id:number):Observable<Star>{
    return this.http.get<Star>(this.UrlEstrella+id);
   }
   updateEstrella(estrella:Star){
     
    return this.http.put<Star>(this.UrlEstrella+estrella.id,estrella);
  }
  eliminarEstrella(estrella:Star){
    return this.http.delete<Star>(this.UrlEstrella+estrella.id);
  }
}

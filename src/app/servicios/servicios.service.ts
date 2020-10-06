import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servicio } from '../models/servicio/servicio';
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private url=`${environment.urlApi}servicios/` 
  
  constructor(private http:HttpClient) { }

  public async getServicios():Promise<Servicio[]>{
    return await this.http.get<Servicio[]>(this.url).toPromise()
  }

  public async getByid(id:number): Promise<Servicio>{
    return await this.http.get<Servicio>(`${this.url}${id}/`).toPromise();
  }
}

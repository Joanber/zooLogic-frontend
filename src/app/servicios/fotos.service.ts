import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment"
import { FotoServicio } from '../models/servicio/FotoServicio';

@Injectable({
  providedIn: 'root'
})
export class FotosService {
  private url=`${environment.urlApi}fotos_servicio/` 

  constructor(private http:HttpClient) { }
  public async getServicios():Promise<FotoServicio[]>{
    return await this.http.get<FotoServicio[]>(this.url).toPromise()
  }
}

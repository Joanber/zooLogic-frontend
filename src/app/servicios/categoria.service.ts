import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/producto/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
   url = 'http://127.0.0.1:8000/api/';
  constructor( private http: HttpClient) { }

  getCategoria() {
    return this.http.get<Categoria[]>(this.url + 'categorias/');
  }
}

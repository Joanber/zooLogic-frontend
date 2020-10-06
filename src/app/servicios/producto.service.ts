import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = 'http://127.0.0.1:8000/api/';
  constructor( private http: HttpClient ) { }
  getProductos() {
    return this.http.get<Producto[]>(this.url + 'productos/');
  }

  getProducto( id: number) {
    return this.http.get(this.url + 'productos/' + id + '.json');
  }
}

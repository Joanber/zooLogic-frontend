import { Categoria } from './../../../../models/producto/categoria';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../../servicios/categoria.service';
import { ProductoService } from '../../../../servicios/producto.service';
import { Producto } from 'src/app/models/producto/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  cargando: boolean;
  constructor( private sc: CategoriaService, private sp: ProductoService ) {
    this.cargando = true;
   }
  listaCategoria: Categoria[];
  listaProducto: Producto[];
  ngOnInit() {
    this.sc.getCategoria().subscribe( data => {
      this.listaCategoria = data;
    });
    this.sp.getProductos().subscribe( prod => {
      this.listaProducto = prod;
      console.log(this.listaProducto);
      if (this.listaProducto == null) {
        console.log('Error');
      } else {
        this.cargando = false;
      }
    });
  }

  filtro(categoria: string) {
    this.listaProducto = [];
    this.sp.getProductos().subscribe( prod => {
      for (const pr of prod) {
        if (categoria === pr.categoria.nombre) {
          this.listaProducto.push(pr);
          console.log(this.listaProducto);
          if (this.listaProducto == null) {
            console.log('Error');
          } else {
            this.cargando = false;
          }
        }
      }
    });
  }
}

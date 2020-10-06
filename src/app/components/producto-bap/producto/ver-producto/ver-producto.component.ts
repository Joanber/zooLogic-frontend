import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../../../servicios/producto.service';
import { Producto } from 'src/app/models/producto/producto';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css']
})
export class VerProductoComponent implements OnInit {
  producto: Producto;
  id: number;
  cargando: boolean;
  constructor( private route: ActivatedRoute, private sp: ProductoService) {
    this.cargando = true;
  }

  ngOnInit() {
    const num = this.route.snapshot.paramMap.get('id');
    // tslint:disable-next-line: radix
    this.id = parseInt(num);
    this.sp.getProducto(this.id).subscribe( (p: any) => {
      this.producto = p;
      if (this.producto === null) {
        console.log('Error');
      } else {
        this.cargando = false;
        console.log(this.producto);
      }
    });
  }


  calificacion( event) {
    console.log(event);
  }

}

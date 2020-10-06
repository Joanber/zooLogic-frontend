import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/models/servicio/servicio';
import { ServiciosService } from 'src/app/servicios/servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  public servicios:Servicio[]=[]
  public loading:boolean
  constructor(private srvS:ServiciosService) { 
    this.loading=true;
  }

  async ngOnInit() {
      await this.cargarServicios()
  }


  async cargarServicios(){
    this.servicios= await this.srvS.getServicios();
    if (this.servicios) {
      this.loading=false
    }
  }

}

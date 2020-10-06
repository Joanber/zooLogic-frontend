import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/servicios/servicios.service';
import { Servicio } from 'src/app/models/servicio/servicio';
import { ActivatedRoute } from '@angular/router';
import { FotosService } from 'src/app/servicios/fotos.service';
import { FotoServicio } from 'src/app/models/servicio/FotoServicio';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {
  public loading:boolean
  public fotos:FotoServicio[]=[]
  public id:number;
  public servicio:Servicio={
    id:0,
    titulo:"",
    descripcion:"", 
    fotos_servicio:[],
    precio:0,
    descuento:0,
    ver_descuento:"",
    ver_en_web:false
  }

  constructor(
    private srvS:ServiciosService,
    private route:ActivatedRoute,
    private srvF:FotosService) { 
      this.loading=true;
    }

  async ngOnInit() {
    const fotos:FotoServicio[]=await this.srvF.getServicios();
    this.id=this.route.snapshot.params["id"];
    if(this.id){
      const servicioDB= await this.srvS.getByid(this.id);
      this.servicio = servicioDB
      this.fotos =this.servicio.fotos_servicio
      this.loading=false
     console.log("foto",this.fotos);

    }
  }


 
  




  

}

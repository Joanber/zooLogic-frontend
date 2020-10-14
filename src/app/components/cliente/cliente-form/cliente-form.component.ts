import { Component, OnInit } from "@angular/core";
import { Cliente } from "src/app/models/cliente/cliente";
import { Router } from "@angular/router";
import { ClientesService } from "../../../servicios/clientes.service";

@Component({
  selector: "app-cliente-form",
  templateUrl: "./cliente-form.component.html",
  styleUrls: ["./cliente-form.component.css"],
})
export class ClienteFormComponent implements OnInit {
  public cliente: Cliente = {
    identificacion: "0106385064",
    primer_nombre: "ROLANDO",
    segundo_nombre: "PAUL",
    primer_apellido: "TACURI",
    segundo_apellido: "GUEVARA",
    fecha_nacimeinto: null,
    correo: "rolandoguevara@gmail.com",
    telefono: "4060058",
    direccion: "Av Americas y Cayambe",
  };

  public erroresServer = [];

  constructor(private router: Router, private clienteSrv: ClientesService) {}

  ngOnInit() {}
  cancelar() {
    this.router.navigate([""]);
  }
  ocultarErrores() {
    this.erroresServer = [];
  }
  async guardar() {
    try {
      this.cliente.fecha_nacimeinto = new Date(this.cliente.fecha_nacimeinto);
      const respuesta = await this.clienteSrv.registrarCliente(this.cliente);
      window.alert("USUARIO REGISTRADO CORRECTAMENTE");
      this.cancelar();
    } catch (error) {
      this.erroresServer = Object.entries(error.error).map((value) => value[1]);
    }
  }
}

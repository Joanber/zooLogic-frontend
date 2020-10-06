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
    identificacion: "0102",
    primer_nombre: "sdfads",
    segundo_nombre: "dsadsf",
    primer_apellido: "adsfasdf",
    segundo_apellido: "sdaadf",
    fecha_nacimeinto: null,
    correo: "asdfasdf@sdfasd.com",
    telefono: "asdfasd",
    direccion: "adsfads",
    username: "adsfads",
    password: "asdfa",
  };

  public erroresServer = [];

  constructor(private router: Router, private clienteSrv: ClientesService) {}

  ngOnInit() {
    const user = localStorage.getItem("user");

    if (user) {
      window.location.href = "";
    }
  }
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
      localStorage.setItem("user", JSON.stringify(respuesta));
      if (respuesta) {
        window.location.reload();
      } else {
        alert("ERROR");
      }
    } catch (error) {
      this.erroresServer = Object.entries(error.error).map((value) => value[1]);
    }
  }
}

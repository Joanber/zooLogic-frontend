import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ClientesService } from "../../servicios/clientes.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  username: string = "";
  password = "";
  esValido = true;

  constructor(private router: Router, private clienteSrv: ClientesService) {}

  ngOnInit() {
    const user = localStorage.getItem("user");

    if (user) {
      window.location.href = "";
    }
  }

  cerrarError() {
    this.esValido = true;
  }
  irRegistrarse() {
    this.router.navigate(["registrarse"]);
  }

  async login() {
    const respuesta = await this.clienteSrv.iniciarSesion(
      this.username,
      this.password
    );

    if (respuesta.length > 0) {
      localStorage.setItem("user", JSON.stringify(respuesta[0]));
      window.location.reload();
    } else {
      alert("NO SE ENCONTRO NINGUN CLIENTE CON ESAS CREDENCIALES");
    }
  }
}

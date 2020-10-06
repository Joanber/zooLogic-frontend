import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Cliente } from "../../models/cliente/cliente";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  public cliente: Cliente = null;

  ngOnInit() {
    const respuesta = localStorage.getItem("user");
    if (respuesta) {
      this.cliente = JSON.parse(respuesta) as Cliente;
      console.log(this.cliente);
    }
  }
  irLogin() {
    this.router.navigate(["login"]);
  }

  cerrarSesion() {
    this.cliente = null;
    localStorage.removeItem("user");
  }
}

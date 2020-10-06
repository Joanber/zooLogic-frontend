import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cliente } from "../models/cliente/cliente";

@Injectable({
  providedIn: "root",
})
export class ClientesService {
  url: string = "http://127.0.0.1:8000/api/clientes/";
  constructor(private http: HttpClient) {}

  public async registrarCliente(cliente: Cliente): Promise<Cliente> {
    return this.http.post<Cliente>(this.url, cliente).toPromise();
  }
  public async iniciarSesion(
    username: string,
    password: string
  ): Promise<Cliente[] | []> {
    return await this.http
      .get<Cliente[] | []>(
        `${this.url}?username=${username}&password=${password}`
      )
      .toPromise();
  }
}

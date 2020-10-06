import { Servicio } from "../servicio/servicio";

export class Cliente {
  identificacion?: string;
  primer_nombre?: string;
  segundo_nombre?: string;
  primer_apellido?: string;
  segundo_apellido?: string;
  fecha_nacimeinto?: Date;
  correo?: string;
  telefono?: string;
  direccion?: string;
  username?: string;
  password?: string;
  servicio?: Servicio;
}

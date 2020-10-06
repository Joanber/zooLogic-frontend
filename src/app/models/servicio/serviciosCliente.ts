import { Servicio } from './servicio';
import { Cliente } from '../cliente/cliente';

export interface ServiciosCliente{
    id?:number
    porcentaje_total?:number
    observaciones?:string
    estado?:string
    servicio?:Servicio
    cliente?:Cliente
}
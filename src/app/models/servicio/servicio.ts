import { FotoServicio } from './FotoServicio';

export interface Servicio{
    id?:number;
    titulo?:string;
    descripcion?:string; 
    fotos_servicio?:FotoServicio[]
    precio?:number;
    descuento?:number; 
    ver_descuento?:string;
    ver_en_web?:boolean;
}
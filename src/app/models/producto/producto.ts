import { Categoria } from './categoria';
import { FotoProducto } from './FotoProducto';

export interface Producto {
    id?:number
    nombre?:string;
    descripcion?:string; 
    precio?:number;
    fotos_producto?: FotoProducto[];
    descuento?:number;
    ver_descuento:number;
    ver_en_web?:string;
    categoria?:Categoria
}
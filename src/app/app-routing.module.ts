import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeRouteComponent } from "./components/home-route/home-route.component";
import { ProductoComponent } from "./components/producto-bap/producto/producto/producto.component";
import { ClienteFormComponent } from "./components/cliente/cliente-form/cliente-form.component";
import { VerProductoComponent } from "./components/producto-bap/producto/ver-producto/ver-producto.component";

import { HomeComponent } from "./components/home/home.component";
import { ServiciosComponent } from "./components/servicios/servicios.component";
import { ServicioComponent } from "./components/servicio/servicio.component";
import { AddServicioComponent } from "./components/add-servicio/add-servicio.component";
import { AcercaComponent } from "./components/acerca/acerca.component";
import { ContactanosComponent } from "./components/contactanos/contactanos.component";

const routes: Routes = [
  { path: "registrarse", component: ClienteFormComponent },
  {
    path: "",
    component: HomeRouteComponent,
    children: [
      {
        path: "producto",
        component: ProductoComponent,
      },
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "verproducto",
        component: VerProductoComponent,
      },
      {
        path: "acercade",
        component: AcercaComponent,
      },
      {
        path: "contactanos",
        component: ContactanosComponent,
      },
      {
        path: "verproducto/:id",
        component: VerProductoComponent,
      },
      {
        path: "servicios",
        component: ServiciosComponent,
      },
      {
        path: "servicio/:id",
        component: ServicioComponent,
      },
      { path: "**", pathMatch: "full", redirectTo: "home" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

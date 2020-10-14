import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeRouteComponent } from "./components/home-route/home-route.component";
import { ProductoComponent } from "./components/producto-bap/producto/producto/producto.component";
import { ClienteFormComponent } from "./components/cliente/cliente-form/cliente-form.component";
import { HttpClientModule } from "@angular/common/http";
import { FooterComponent } from "./components/footer/footer.component";
import { ServiciosComponent } from "./components/servicios/servicios.component";
import { ServicioComponent } from "./components/servicio/servicio.component";
import { AddServicioComponent } from "./components/add-servicio/add-servicio.component";
import { VerProductoComponent } from "./components/producto-bap/producto/ver-producto/ver-producto.component";
import { AcercaComponent } from "./components/acerca/acerca.component";
import { ContactanosComponent } from "./components/contactanos/contactanos.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HomeRouteComponent,
    ProductoComponent,
    ClienteFormComponent,
    FooterComponent,
    ServiciosComponent,
    ServicioComponent,
    AddServicioComponent,
    VerProductoComponent,
    AcercaComponent,
    ContactanosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

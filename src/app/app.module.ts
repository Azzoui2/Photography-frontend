import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { ReservationComponent } from './reservation/reservation.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonneComponent } from './personne/personne.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonnesComponent } from './personnes/personnes.component';
import { SpecialitesComponent } from './specialites/specialites.component';
import { HttpClientModule } from '@angular/common/http';
 import { AjouterClientComponent } from './ajouter-client/ajouter-client.component';
import { AjouterReservationComponent } from './ajouter-reservation/ajouter-reservation.component';
 
@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    ReservationComponent,
    NavbarComponent,
    PersonneComponent,
    PersonnesComponent,
    SpecialitesComponent,
    AjouterClientComponent,
    AjouterReservationComponent
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule,FormsModule
     ,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

 
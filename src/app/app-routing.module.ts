import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonneComponent } from './personne/personne.component';
import { ProduitComponent } from './produit/produit.component';
import { ReservationComponent } from './reservation/reservation.component';
import { PersonnesComponent } from './personnes/personnes.component';
import { SpecialitesComponent } from './specialites/specialites.component';

const routes: Routes = [
  { path: 'personnes', component: PersonnesComponent  },
  { path: 'personne', component: PersonneComponent },
  { path: 'produit', component: ProduitComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'specialites', component: SpecialitesComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

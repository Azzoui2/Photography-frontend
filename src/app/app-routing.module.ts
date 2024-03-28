import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonneComponent } from './personne/personne.component';
import { ProduitComponent } from './produit/produit.component';
import { ReservationComponent } from './reservation/reservation.component';
import { PersonnesComponent } from './personnes/personnes.component';
import { SpecialitesComponent } from './specialites/specialites.component';
import { AjouterClientComponent } from './ajouter-client/ajouter-client.component';
import { AjouterReservationComponent } from './ajouter-reservation/ajouter-reservation.component';

const routes: Routes = [
  { path: 'reservation/:id', component: ReservationComponent },

  { path: 'personnes', component: PersonnesComponent  },
  { path: 'personne', component: PersonneComponent },
  { path: 'produit', component: ProduitComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'specialites', component: SpecialitesComponent },
  { path: 'ajouter-client', component: AjouterClientComponent },
  { path: 'ajouter-reservation', component: AjouterReservationComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

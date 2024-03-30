import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Reservation, Status } from '../model/reservation.model';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
 

export class ReservationComponent  implements OnInit{
  constructor (private Http: HttpClient , private var_ReservationService : ReservationService ){} // obligatoir d'ajoute  HttpClientModule dana app module dans imprtes
  reservation : any
  private apiUrl = 'http://localhost:8082/reservation';
  ngOnInit(): void {

this.Http.get("http://localhost:8082/reservation").subscribe(
  (data) => { this.reservation=data;
   
  },
  (error) => { console.log(error)
  
  }
);

      
  }
  // Méthode pour récupérer toutes les réservations
  getReservations(): Observable<any[]> {
    return this.Http.get<any[]>(this.apiUrl);
  }

  // Méthode pour supprimer une réservation par son ID
 
  deleteReservation(res: Reservation) {
    const confirmDelete = confirm("Êtes-vous sûr de vouloir supprimer cette réservation ?");
    if (confirmDelete) {
      this.var_ReservationService.deleteReservation(res.id).subscribe({
        next: () => {
          // Supprimer la réservation de la liste
          this.reservation = this.reservation.filter((item: Reservation) => item.id !== res.id);
        },
        error: (err) => {
          console.log(err);
          alert("Une erreur s'est produite lors de la suppression de la réservation.");
        }
      });
    }
  }
  
  
  confermerReservation(reservation: Reservation) {
    reservation.statut = Status.CONFIRMEE;
        this.var_ReservationService.updateReservation(reservation).subscribe({
      next: data => {
        alert('Réservation confirmée avec succès:')
        console.log('Réservation confirmée avec succès:', data);
        // Ajoutez ici la logique pour actualiser l'affichage si nécessaire
      },
      error: err => {
        console.error('Erreur lors de la confirmation de la réservation:', err);
        // Ajoutez ici la logique pour gérer les erreurs
      }
    });
  }
  
  //   this.var_ReservationService.deleteReservation(res.id).subscribe({

      
  //     next:(donnes_obj) => { this.reservation=this.reservation.pipe(map (data=>{
  //       let index=data.indexOf(res);
  //       data.slice(index,1)
  //       return data;
  //       }));},
        
     
  //    error:(err)=>{console.log(err);}

  //   })
  }



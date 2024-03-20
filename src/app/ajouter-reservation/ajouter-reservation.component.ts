import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Reservation } from '../model/reservation.model';
import { ReservationService } from '../services/reservation.service';
 
@Component({
  selector: 'app-ajouter-reservation',
  templateUrl: './ajouter-reservation.component.html',
  styleUrls: ['./ajouter-reservation.component.css']
})
export class AjouterReservationComponent implements OnInit {
  NewReservationFormGroup!: FormGroup;
  reservation: Reservation = { date: '', type: 'EN_ATTENTE', finie: true };

  constructor(private fb: FormBuilder, private reservationService: ReservationService, private router: Router) { }

  ngOnInit(): void {
    this.NewReservationFormGroup = this.fb.group({
      date: [''],
      type: ['EN_ATTENTE'],
      finie: [true]
    });
  }
  ajouterReservation() {
    let reservation: Reservation = this.NewReservationFormGroup.value;
    this.reservationService.saveReservation(reservation).subscribe({
      next: data => {
        alert("Réservation ajoutée avec succès");
        // Naviguer vers une autre page après l'ajout de la réservation
      },
      error: err => {
        console.error("Erreur lors de l'ajout de la réservation :", err);
        alert("Une erreur est survenue lors de l'ajout de la réservation");
      }
    });
  }
  
}

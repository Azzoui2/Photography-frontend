import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reservation } from '../model/reservation.model';
import { ReservationService } from '../services/reservation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-reservation',
  templateUrl: './ajouter-reservation.component.html',
  styleUrls: ['./ajouter-reservation.component.css']
})
export class AjouterReservationComponent implements OnInit {
  NewReservationFormGroup!: FormGroup;
  showAutreType: boolean = false; 
  currentDate!: Date;
  currentTime!: Date;

  constructor(private fb: FormBuilder,private router: Router, private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.currentDate = new Date();
        // Ajouter 2 heures à l'heure actuelle
    this.currentDate.setHours(this.currentDate.getHours() + 2);
    const heure  = ('0' + this.currentDate.getHours()).slice(-2);
     
    const minutes = ('0' + this.currentDate.getMinutes()).slice(-2);
    const heureActuelle = `${heure}:${minutes}`;

    this.NewReservationFormGroup = this.fb.group({
      type: ['EN_ATTENTE'],
      date: [this.currentDate.toISOString().substring(0, 10), Validators.required],
      heure: [heureActuelle, Validators.required],
      adresse: ["", Validators.required],
      type_photo: ['', Validators.required],
      
      // Ajoutez d'autres champs de formulaire pour la réservation selon vos besoins
    });
  }

  ajouterReservation() {
    if (this.NewReservationFormGroup.valid) {
      const reservation: Reservation = this.NewReservationFormGroup.value;
      this.reservationService.saveReservation(reservation).subscribe({
        next: data => { 
          console.log('Réservation ajoutée avec succès:', data);
          alert('Réservation ajoutée avec succès');
          this.router.navigate(['/']);
        },
        error: err => {
          console.error('Une erreur est survenue lors de l\'ajout de la réservation:', err);
          alert('Une erreur est survenue lors de l\'ajout de la réservation. Veuillez réessayer.');
        }
      });
    } else {
      alert('Veuillez remplir tous les champs du formulaire.');
    }
  }

  toggleAutreType() {
    const typePhotoControl = this.NewReservationFormGroup.get('type_photo');
    if (typePhotoControl) {
      this.showAutreType = typePhotoControl.value ;
    }
  }

}

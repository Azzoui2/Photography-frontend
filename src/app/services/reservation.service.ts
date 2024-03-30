import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Reservation } from '../model/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  public saveReservation(reservation: Reservation): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    alert("Réservation ajoutée avec succès");
    return this.http.post(environment.backendHost + "/reservation", reservation, { headers: headers });
  }
  

  public deleteReservation(id: number) {
    return this.http.delete(environment.backendHost + "/reservation/" + id);
  }

  updateReservation (reservation: Reservation) {
    const url = `http://localhost:8082/reservation/${reservation.id}`;
    return this.http.put<Reservation>(url, reservation);
  }
  
  
}

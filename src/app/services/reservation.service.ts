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
    return this.http.post(environment.backendHost + "/reservation", reservation, { headers: headers });
  }

  public deleteReservation(id: number) {
    return this.http.delete(environment.backendHost + "/reservation/" + id);
  }
  
}

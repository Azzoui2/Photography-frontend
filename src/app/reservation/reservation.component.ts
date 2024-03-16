import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
 

export class ReservationComponent  implements OnInit{
  constructor (private Http: HttpClient){} // obligatoir d'ajoute  HttpClientModule dana app module dans imprtes
  reservation : any
  ngOnInit(): void {

this.Http.get("http://localhost:8080/reservation").subscribe(
  (data) => { this.reservation=data;
   
  },
  (error) => { console.log(error)
  
  }
);

      
  }


}


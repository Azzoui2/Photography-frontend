import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

 
@Component({
  selector: 'app-specialites',
  templateUrl: './specialites.component.html',
  styleUrls: ['./specialites.component.css']
})
 

export class SpecialitesComponent  implements OnInit{
  constructor (private Http: HttpClient){} // obligatoir d'ajoute  HttpClientModule dana app module dans imprtes
  specialites : any
  ngOnInit(): void {

this.Http.get("http://localhost:8080/specialites").subscribe(
  (data) => { this.specialites=data;
   
  },
  (error) => { console.log(error)
  
  }
);

      
  }


}


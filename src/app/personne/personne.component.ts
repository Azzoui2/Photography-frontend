import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent  implements OnInit{
  constructor (private Http: HttpClient){}
  personne : any
  ngOnInit(): void {

this.Http.get("http://localhost:8080/personnes").subscribe(
  (data) => { this.personne=data;
   
  },
  (error) => { console.log(error)
  
  }
);

      
  }


}


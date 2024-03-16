import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styleUrls: ['./personnes.component.css']
})
export class PersonnesComponent  implements OnInit{
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


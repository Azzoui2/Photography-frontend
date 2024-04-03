
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { personnes } from '../model/client.model';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styleUrls: ['./personnes.component.css']
})
export class PersonnesComponent implements OnInit {
  errorMessage!: string;
  searchFormGroup!: FormGroup;
  personne!:any ; 
  
  constructor(private http: HttpClient, private fb: FormBuilder, private var_personnesServices: ClientService) { }

  ngOnInit(): void {
    this.searchFormGroup = this.fb.group({
      keyword: ['']
    });

    this.handleSearchformPersonnes();
  }
  handleSearchformPersonnes() {
     
    let kw = this.searchFormGroup?.value.keyword;
    //alert(kw);
    this.var_personnesServices.searchPersonnes(kw).subscribe(
      (data) => {
        this.personne = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  

}
// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { Observable } from 'rxjs';
// import { personnes } from '../model/client.model';
// import { ClientService } from '../services/client.service';

// @Component({
//   selector: 'app-personnes',
//   templateUrl: './personnes.component.html',
//   styleUrls: ['./personnes.component.css']
// })

// export class PersonnesComponent  implements OnInit{
//   //personnes!:Observable<Array<personnes>>;
//   errorMessage! : object;
//   // // ou //errorMessage! : string ;
//   searchFormGroup: FormGroup | undefined
//   constructor (private Http: HttpClient ,private fb : FormBuilder,private var_personnesServices : ClientService){}
//  // personnes : any
//  personnes!:Observable<Array<personnes>>;
//   ngOnInit(): void {

//     this.searchFormGroup=this.fb.group({

//       keyword: this.fb.control("")

//     });
 
//     this.handleSearchformPersonnes();

// this.Http.get("http://localhost:8082/personnes").subscribe(
//   (data) => { this.personnes=data;
   
//   },
//   (error) => { console.log(error)
  
//   }
// );

      
//   }


//   handleSearchformPersonnes(){

//     let kw=this.searchFormGroup?.value.keyword;
//     alert("1"+kw)
//     this.handleSearchformPersonnes=this.var_personnesServices.searchPersonnes(kw).pipe();
//     // traiter l'ereure
  
    
            
//       }

// }


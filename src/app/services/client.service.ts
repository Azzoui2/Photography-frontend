 
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Client } from '../model/client.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private http: HttpClient) { }

  searchPersonnes(kw:String){
 
    return this.http.get(environment.backendHost+"/personnes/recherch?keyword="+kw)
  }
  checkEmailExists(email: string): Observable<boolean> {
    //alert(email)
    return   this.http.get<boolean>(`http://localhost:8082/personnes/check-email/`+ email);

  }
  
  saveClient(client: Client): Observable<Client> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    
    
    return this.http.post<Client>(environment.backendHost + "/personnes", client, httpOptions)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Une erreur est survenue lors de l\'enregistrement du client:', error);
          return throwError('Erreur lors de l\'enregistrement du client. Veuillez réessayer.');
        })
      );
  }
}

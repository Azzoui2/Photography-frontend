import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Client } from '../model/client.model';
import { environment } from '../environments/environment';
 
import { catchError } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
 
  // public getCustomers(): Observable<Array<Customer>> {
  //   // Supprimez l'espace à la fin de l'URL
  //   return this.http.get<Array<Customer>>(environment.backendHost+"/customers");
  // }
  // public searchCustomers(keyword : string ):  Observable<Array<Customer>> {
  //   // Supprimez l'espace à la fin de l'URL
  //   return this.http.get<Array<Customer>>(environment.backendHost+"/customers/search?keyword="+keyword);
  // }
 
//   public saveClient(client: Client): Observable<Client> {
//     return this.http.post<Client>(environment.backendHost + "/personnes", client);
// }
 
export class ClientService {
  constructor(private http: HttpClient) {}

  saveClient(client: Client): Observable<Client> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<Client>(environment.backendHost + "/personnes", client, { headers })
      .pipe(
        catchError(this.handleError) // Modification ici
      );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {  
    return throwError(error); // Modification ici
  }
}


  // public deletCustomers(id : number ){
    
  //   return this.http.delete<Customer>(environment.backendHost+"/customers/"+id);
  // }


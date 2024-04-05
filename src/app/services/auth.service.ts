import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor() { }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login() {
    // Logique de connexion ici
    this.loggedIn.next(true);
  }

  logout() {
    // Logique de déconnexion ici
    this.loggedIn.next(false);
  }
}


// ajouter-client.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from '../model/client.model';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.css']
})
export class AjouterClientComponent implements OnInit {
  ajouterClientFormGroup!: FormGroup;

  constructor(private fb: FormBuilder, private clientService: ClientService) { }

  ngOnInit(): void {
    this.ajouterClientFormGroup = this.fb.group({
      email: ['', Validators.required],
      mot_de_passe: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      telephone: ['', Validators.required]
    });
  }

  handleSaveClient() {
    if (this.ajouterClientFormGroup.valid) {
      const client: Client = this.ajouterClientFormGroup.value;
      this.clientService.saveClient(client).subscribe({
        next: data => { 
          console.log('Client ajouté avec succès:', data);
          alert('Client ajouté avec succès');
        },
        error: err => {
          console.error('Une erreur est survenue lors de l\'ajout du client:', err);
          alert('Une erreur est survenue lors de l\'ajout du client. Veuillez réessayer.');
        }
      });
    } else {
      alert('Veuillez remplir tous les champs du formulaire.');
    }
  }
}

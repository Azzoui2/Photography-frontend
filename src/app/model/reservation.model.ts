export enum Status {
  EN_ATTENTE,
  CONFIRMEE,
  ANNULEE
}

export interface Reservation {
  id: number;
  date: string;
  type_photo: string;
  finie: boolean;
  heure: string;
  adresse: string;
  statut: Status; // Utilisation de l'énumération Status pour le statut de la réservation

  // Ajoutez d'autres champs pour les autres informations de la réservation
}

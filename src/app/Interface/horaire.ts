import { Employe } from './employe';
import { Time } from '@angular/common';

export class Horaire{
  idHoraire: number;
  dateJour: Date;
  heureDebut: Time;
  heureFin: Time;
  heureDebut2: Time;
  heureFin2: Time;
  employee: Employe;
  createBy: Employe;
  modifBy: Employe;
  nbrHeureWeek: string;

}
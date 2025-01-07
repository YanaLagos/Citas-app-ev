import { Component, OnInit, Input } from '@angular/core';
import { IonCard, IonCardTitle, IonCardHeader, IonCardContent } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { Cita } from 'src/app/modelo/cita';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.scss'],
  standalone: true,
  imports: [CommonModule, IonCardContent, IonCardHeader, IonCard, IonCardTitle]
})
export class CitaComponent  implements OnInit {
  @Input() cita!: Cita;

  constructor() { }

  ngOnInit() {}

}

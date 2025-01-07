import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cita } from 'src/app/modelo/cita';
import { IonItem, IonButton, IonList, IonLabel, IonIcon } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { trashSharp } from 'ionicons/icons';

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrls: ['./lista-citas.component.scss'],
  standalone: true,
  imports: [IonIcon, CommonModule, IonLabel, IonList, IonItem, IonButton]
})
export class ListaCitasComponent {
  @Input() citas: Cita[] = []; 
  @Output() eliminarCita = new EventEmitter<number>();  
  
  constructor(
  ) {
    addIcons({trashSharp});
  } 
  eliminar(index: number): void {
    this.eliminarCita.emit(index);  
  }

}
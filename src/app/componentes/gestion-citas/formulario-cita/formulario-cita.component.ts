import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonInput, IonButton, IonLabel, IonItem } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-cita',
  templateUrl: './formulario-cita.component.html',
  styleUrls: ['./formulario-cita.component.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonInput, IonButton, IonLabel, IonItem]
})
export class FormularioCitaComponent {
  frase: string = ''; 
  autor: string = '';

  @Output() nuevaCita = new EventEmitter<{ frase: string, autor: string }>(); 

  agregarCita() {
    if (this.frase.trim() && this.autor.trim()) {
      this.nuevaCita.emit({ frase: this.frase, autor: this.autor });  
      this.frase = '';  
      this.autor = '';  
    }
  }
}

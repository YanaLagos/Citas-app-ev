import { Component, OnInit } from '@angular/core';
import { CitaService } from 'src/app/servicios/cita.service';
import { Cita } from 'src/app/modelo/cita';
import { FormularioCitaComponent } from './formulario-cita/formulario-cita.component';
import { ListaCitasComponent } from './lista-citas/lista-citas.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-gestion-citas',
  standalone: true,
  templateUrl: './gestion-citas.component.html',
  styleUrls: ['./gestion-citas.component.scss'],
  imports: [CommonModule, IonicModule, FormularioCitaComponent, ListaCitasComponent],
})
export class GestionCitasComponent implements OnInit {
  citas: Cita[] = []; 

  constructor(private citaService: CitaService) {}

  ngOnInit() {
    this.citas = this.citaService.GetCitas();
  }

  agregarCita(cita: { frase: string, autor: string }) {
    const nuevaCita = new Cita(cita.frase, cita.autor);  
    this.citaService.agregarCita(nuevaCita); 
    this.citas = this.citaService.GetCitas();  
  }

  eliminarCita(index: number) {
    if (index >= 0) {  
      this.citaService.eliminarCita(index); 
      this.citas = this.citaService.GetCitas();  
    }
  }
}


import { Component, OnInit } from '@angular/core';
import { CitaService } from '../servicios/cita.service';
import { Cita } from '../modelo/cita';
import { CitaComponent } from '../componentes/cita/cita.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonHeader, IonContent, IonButtons, IonIcon, IonButton, IonToolbar, IonTitle } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { settingsSharp } from 'ionicons/icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  standalone: true,
  styleUrls: ['./home.page.scss'],
  imports: [ RouterModule, CitaComponent, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons, IonContent, IonHeader, CommonModule]
})

export class HomePage implements OnInit {
  cita!: Cita;
  eliminarPermitido: boolean = false; 

  constructor(
    private citaService: CitaService,
    private router: Router

  ) {
    addIcons({settingsSharp});
  } 

  ngOnInit(): void {
    this.cita = this.citaService.GetCitaAleatoria();
    console.log(this.cita); 
  }

  goToConfig(): void {
    this.router.navigate(['/configuracion']); 
  }

  eliminarCita(): void {
    if (this.eliminarPermitido) {
      this.citaService.eliminarCita; 
      this.cita = this.citaService.GetCitaAleatoria(); 
    } else {
      alert('No se permite eliminar la cita. Habilite la función desde la Configuración');
    }
  }
}

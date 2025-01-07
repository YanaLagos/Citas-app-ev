import { Component, OnInit } from '@angular/core';
import { CitaService } from 'src/app/servicios/cita.service'; 
import { FormsModule } from '@angular/forms'; 
import { IonItem, IonLabel, IonToggle, IonButton } from '@ionic/angular/standalone'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.scss'],
  standalone: true, 
  imports: [IonButton,  FormsModule, IonToggle, IonItem, IonLabel] 
})
export class ConfiguracionComponent implements OnInit {
  eliminarPermitido: boolean = false; 

  constructor(
    private citaService: CitaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.eliminarPermitido = this.citaService.puedeEliminar();
  }

  actualizarPermisoEliminar() {
    if (this.eliminarPermitido !== this.citaService.puedeEliminar()) {
      this.citaService.permitirEliminar(this.eliminarPermitido);
    }
  }

  irAGestionCitas() {
    this.router.navigate(['/gestion-citas']);
  }
}

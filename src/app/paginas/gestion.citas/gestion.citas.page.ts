import { Component } from '@angular/core';
import { GestionCitasComponent } from 'src/app/componentes/gestion-citas/gestion-citas.component';
import { } from "@ionic/angular/standalone";

@Component({
  selector: 'app-gestion.citas',
  templateUrl: './gestion.citas.page.html',
  styleUrls: ['./gestion.citas.page.scss'],
  standalone: true,
  imports: [GestionCitasComponent]
})
export class GestionPage {}

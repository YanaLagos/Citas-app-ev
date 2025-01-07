import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { IonicModule } from '@ionic/angular';
import { ConfiguracionComponent } from "../../componentes/configuracion/configuracion.component";  

@Component({
  selector: 'app-configuracion-page',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    ConfiguracionComponent
]
})
export class ConfiguracionPage {}
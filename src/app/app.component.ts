import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from "@ionic/angular/standalone";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [IonRouterOutlet, IonApp], 
})
export class AppComponent {
  constructor(private router: Router) {}

  goToConfig(): void {
    this.router.navigate(['/configuracion']);
  }
}
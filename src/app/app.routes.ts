import { Route } from '@angular/router';
import { HomePage } from './home/home.page';
import { ConfiguracionPage } from './paginas/configuracion/configuracion.page';
import { GestionCitasComponent } from './componentes/gestion-citas/gestion-citas.component';

export const routes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Redirige a la página de inicio
  { path: 'home', component: HomePage },
  { path: 'configuracion', component: ConfiguracionPage },
  { path: 'gestion-citas', component: GestionCitasComponent },
];
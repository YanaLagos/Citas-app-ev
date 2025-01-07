import { Injectable } from '@angular/core'
import { Cita } from '../modelo/cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private cita: Cita[] = [
    new Cita('Nuestras cicatrices nos hacen saber que nuestro pasado fue real.', 'Jane Austen'),
    new Cita('No hay barrera, cerradura ni cerrojo que puedas imponer a la libertad de mi mente.', 'Virginia Woolf'),
    new Cita('El mal es siempre posible. La bondad es una dificultad.', 'Anne Rice'),
    new Cita('Nadie puede estar cómodo en su propia piel si no acepta sus contradicciones.', 'Clarice Lispector'),
    new Cita('Me arrepiento de las dietas, de los platos deliciosos rechazados por vanidad, tanto como lamento las ocasiones de hacer el amor que he dejado pasar por ocuparme de tareas pendientes o por virtud puritana.', 'Isabel Allende')
  ];

  private eliminarCitaPermitido = false;  

  constructor() {}

  // Cita aleatoria
  GetCitaAleatoria(): Cita {
    const randomIndex = Math.floor(Math.random() * this.cita.length);
    return this.cita[randomIndex];  // Devuelve una sola cita
  }

  // Obtener todas las citas
  GetCitas(): Cita[] {
    return [...this.cita];  // Devuelve todas las citas
  }

  // Agregar una nueva cita
  agregarCita(cita: Cita): void {
    this.cita.push(cita);
  }

  // Eliminar una cita
  eliminarCita(index: number): void {
    this.cita.splice(index, 1);
  }

  // Permitir o no eliminar citas
  permitirEliminar(permitir: boolean): void {
    this.eliminarCitaPermitido = permitir;
  }

  // Obtener el estado de la opción de eliminación
  puedeEliminar(): boolean {
    return this.eliminarCitaPermitido;
  }
}

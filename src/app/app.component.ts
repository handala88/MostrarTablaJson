import { Component, VERSION } from '@angular/core';
import vehicles from './_files/datosTabla.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  vehicleList: {
    Identificador: string;
    Grupo: string;
    Revision: string;
    Fecha: string;
    Odometro: string;
    Horometro: string;
    Lugar: string;
    Costes: string;
    Comentarios: string;
  }[] = vehicles;

  constructor() {
    console.log(this.vehicleList);
  }
}

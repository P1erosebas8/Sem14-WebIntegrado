import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Registro } from '../../models/registro';

@Component({
  selector: 'app-resumen-registro',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './resumen-registro.component.html',
  styleUrls: ['./resumen-registro.component.scss'],
})
export class ResumenRegistroComponent {
  @Input() registro: Registro = {
    nombre: '',
    correo: '',
    tipoApp: ''
  };
}

import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'poc-toastr';
  constructor(private toastr: ToastrService) {}

  showSuccessNotification() {
    this.toastr.success('Mensaje de éxito', 'Success', {
      disableTimeOut: true, // Duración indefinida
      closeButton: true, // Botón para cerrar
      positionClass: 'toast-top-right', // Arriba a la derecha
    });
  }

  showWarningNotification() {
    this.toastr.warning('Mensaje de advertencia', 'Warning', {
      timeOut: 5000, // Duración de 5 segundos
      closeButton: false, // No se puede cerrar
      positionClass: 'toast-top-left', // Arriba a la izquierda
    });
  }

  showInfoNotification() {
    this.toastr.info('Mensaje de información', 'Info', {
      disableTimeOut: true, // Duración indefinida
      closeButton: true, // Botón para cerrar
      positionClass: 'toast-bottom-right', // Abajo a la derecha
    });
  }

  showErrorNotification() {
    this.toastr.error('Mensaje de error', 'Error', {
      timeOut: 10000, // Duración de 10 segundos
      closeButton: false, // Botón para cerrar
      positionClass: 'toast-bottom-left', // Abajo a la izquierda
    });
  }
}

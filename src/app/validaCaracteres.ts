import { AbstractControl } from '@angular/forms';

export class FiltrarCaracteres {
  static filtrarCaracteres(caracter: AbstractControl) {
    if (caracter.value == null) return null;
    const contenido = caracter.value;
    for (var i = 0; i < contenido.length; i++) {
      const letra = contenido.substr(i, 1);
      const valor = letra.charCodeAt(0);
      if (!(valor >= 65 && valor <= 90)) {
        return {
          filtrarCaracteres: true,
        };
      }
    }
    return null;
  }
}

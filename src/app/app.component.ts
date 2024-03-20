import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '066 Forms Reactive';

  form: FormGroup;

  constructor(private fctrl: FormBuilder) {
    this.form = fctrl.group({
      codigo: '123',
      nombre: 'Jhon',
      aficiones: fctrl.group({
        aficion1: 'musica',
        aficion2: 'futbol',
      }),
    });
  }

  onSubmit() {
    console.log('codigo: ' + this.form.controls['codigo'].value);
    console.log('nombre: ' + this.form.controls['nombre'].value);
    console.log(
      'aficiones: ' + JSON.stringify(this.form.controls['aficiones'].value)
    );
    console.log('form ' + JSON.stringify(this.form.value));
  }
}

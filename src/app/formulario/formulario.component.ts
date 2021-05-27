import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  FormularioBasico = new FormGroup({
    nombre : new FormControl('', Validators.required),
    ci : new FormControl('', Validators.required),
    nro : new FormControl('', [Validators.required,]),
    area : new FormControl('', Validators.required),
    profesion : new FormControl('', Validators.required),
    añoT: new FormControl('', Validators.required), 
    g: new FormControl('', Validators.required), 
  });

  FormularioExamenS = new FormGroup({
    t : new FormControl('', Validators.required),
    ng : new FormControl('', Validators.required),
  });

  FormularioContactos = new FormGroup({
    tel : new FormControl('', Validators.required),
    co : new FormControl('', Validators.required),
  });

  FormularioSeguro = new FormGroup({
    peso : new FormControl('', Validators.required),
    estatura : new FormControl('', Validators.required),
    pS : new FormControl('', [Validators.required,]),
    pD : new FormControl('', Validators.required),
    e : new FormControl('', Validators.required),
    m: new FormControl('', Validators.required), 
  });

}

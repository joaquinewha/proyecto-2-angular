import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  nombre: any;
  ci: any;
  nr: any;
  area: any;
  profesion: any;
  aT: any;
  g: any;

  t: any; 
  nG: any;

  tel : any;
  co : any;

  peso : any;
  estatura: any;
  pS: any;
  pD: any;

  constructor() { }

  formB(){
    alert("Su nombrees:"+this.nombre+" \n"+
    "Su ci:"+this.ci+" \n"+
    "Su Area de trabajo es:"+this.area+" \n"+
    "Su profesion:"+this.profesion+" \n"+
    "Su años de trabajo:"+this.aT+" \n"+
    "Su genero:"+this.g+" \n")
  }
  formS(){
    alert("Su Tipo de sangre:"+this.t+" \n"+
    "Su nivel de glucosa ensangre es:"+this.nG)
  }
  formC(){
    alert("Su telefono es:"+this.tel+" \n"+
    "Su correo electronico es:"+this.co)
  }
  formSeg(){
    alert("Usted pesa es:"+this.peso+" \n"+
    "Su estatura es:"+this.estatura+" \n"+
    "Su precion sistolica es:"+this.pS+" \n"+
    "Su precion distolica es:"+this.pD)
  }


  ngOnInit(): void {
  }

  FormularioBasico = new FormGroup({
    nombre : new FormControl('', Validators.required),
    ci : new FormControl('', [Validators.required,Validators.minLength(6)]),
    nro : new FormControl('', [Validators.required,Validators.minLength(6)]),
    area : new FormControl('', Validators.required),
    profesion : new FormControl('', Validators.required),
    añoT: new FormControl('', [Validators.required]), 
    g: new FormControl('', Validators.required),
    
  });

  FormularioExamenS = new FormGroup({
    t : new FormControl('', Validators.required),
    nG : new FormControl('', Validators.required),
  });

  FormularioContactos = new FormGroup({
    tel : new FormControl('', [Validators.required,Validators.minLength(8)]),
    co : new FormControl('', [Validators.required,Validators.email]),
  });

  FormularioSeguro = new FormGroup({
    peso : new FormControl('', Validators.required),
    estatura : new FormControl('', Validators.required),
    pS : new FormControl('', [Validators.required,]),
    pD : new FormControl('', Validators.required),
  });

}

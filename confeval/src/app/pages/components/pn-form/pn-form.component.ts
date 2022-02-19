import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pn-form',
  templateUrl: './pn-form.component.html',
  styleUrls: ['./pn-form.component.css']
})
export class PnFormComponent implements OnInit {

  proveedorForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.proveedorForm = this.formBuilder.group({
      tipoDoc: ['', Validators.required],
      numDoc: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidoP: ['', Validators.required],
      apellidoM: ['', Validators.required],
      telefono: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  cerrarForm(){

  }

  buscarPersona(){

  }

  onSubmit(){

  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MUebles } from 'src/app/interfaces/muebles';

@Component({
  selector: 'app-agregar-editar-muebles',
  templateUrl: './agregar-editar-muebles.component.html',
  styleUrls: ['./agregar-editar-muebles.component.css']
})
export class AgregarEditarMueblesComponent implements OnInit {
  loading: boolean = false;
form: FormGroup
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre:['',Validators.required],
      descripcion:['',Validators.required],
      dim:['',Validators.required],
      color:['',Validators.required],
      materialesId:['',Validators.required],

    })
   }

  ngOnInit(): void {
  }
  agregarMuebles(){
    const nombre = this.form.value.nombre;
    const muebles: MUebles = {
      nombre: this.form.value.nombre,
      descripcion: this.form.value.descripcion,
      dim: this.form.value.dim,
      color: this.form.value.color,
      materialesId: this.form.value.materialesId,

    }
    console.log(muebles)
  }

}


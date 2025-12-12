import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comp.html',
  styleUrl: './comp.css'
})
export class CompComponent implements OnInit, OnDestroy {

  nombre = "Mateo";
  imgUrl = "https://angular.io/assets/images/logos/angular/angular.png";
  cont = 0;
  texto = "";
  mostrar = true;
  usuarios = ["Morales", "Matias", "Horcus"];
  activo = true;
  tamano = 20;

  constructor() {
    console.log("constructor ejecutado");
  }

  ngOnInit() {
    console.log("ngOnInit ejecutado");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy ejecutado");
  }

  sumar() {
    this.cont++;
  }
}

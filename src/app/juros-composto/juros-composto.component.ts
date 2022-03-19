import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-composto',
  templateUrl: './juros-composto.component.html',
  styleUrls: ['./juros-composto.component.css'],
})
export class JurosCompostoComponent {
  numero: number;
  jurosArray: any[] = [];

  buildJurosCompostos() {
    this.numero = 10;

    for (let i = 1; i <= 10; i++) {
      this.jurosArray.push(i);
    }
  }

  constructor() {
    this.buildJurosCompostos();
  }
}

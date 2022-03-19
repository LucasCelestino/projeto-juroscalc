import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-composto',
  templateUrl: './juros-composto.component.html',
  styleUrls: ['./juros-composto.component.css'],
})
export class JurosCompostoComponent implements OnInit {
  vp: number;
  j: number;
  n: number;
  jurosArray: any[] = [];

  constructor() {
    // os valores dos inputs não estão refletindo na tabela, mesmo com ngModel...?
    // mudando diretamente por aqui eles estão refletindo na tabela
    this.vp = 200;
    this.j = 2.5;
    this.n = 5;
    // chamando a funcao para da build nos objetos
    this.buildJurosCompostos(this.vp, this.j);
  }

  buildJurosCompostos(vlPresente: Number, txJuros: Number) {
    // usando valor do N vindo do input para construir objetos JSON e calcular os juros
    for (let i = 1; i <= this.n; i++) {
      this.jurosArray.push({
        n: i,
        composto: (this.vp * Math.pow(1 + this.j / 100, i)).toFixed(2),
      });
    }
  }

  ngOnInit() {}
}

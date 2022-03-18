import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros',
  templateUrl: './juros.component.html',
  styleUrls: ['./juros.component.css'],
})
export class JurosComponent implements OnInit {
  teste: number;

  constructor() {
    this.teste = 100;
  }

  ngOnInit() {}
}

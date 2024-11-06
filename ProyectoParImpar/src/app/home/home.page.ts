import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  num: number = 0;
  resultado: string = "...";

  constructor() {}

  compruebaNumero() {
    if (this.num % 2 === 0) {
      this.resultado = "El número es par";
    } else {
      this.resultado = "El número es impar";
    }
  }

  restartGame() {
    this.num = 0;
    this.resultado = "...";
  }
}

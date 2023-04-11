import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  getRandomColorDiv(): string {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgba(${red}, ${green}, ${blue}, 0.4)`;
  }

  expressions: string[] = [
    'Carpe Diem',
    'Veni, Vidi, Vici',
    'Ad Astra Per Aspera',
    'Fortune Favors the Bold',
    'Tempus Fugit',
    'Alea Iacta Est',
    'Cogito, ergo sum',
    'Deus ex machina',
    'E Pluribus Unum',
    'In vino veritas',
    'Memento Mori',
    'Nil desperandum',
    'Per aspera ad astra',
  ];

  generateRandomExpression() {
    const randomIndex = Math.floor(Math.random() * this.expressions.length);
    return this.expressions[randomIndex];
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private red = Math.floor(Math.random() * 256);
  private green = Math.floor(Math.random() * 256);
  private blue = Math.floor(Math.random() * 256);

  getRandomColorNav(): string {
    return `rgba(${this.red}, ${this.green}, ${this.blue}, 0.4)`;
  }

  getRandomColorText(): string {
    return `rgba(${this.red}, ${this.green}, ${this.blue})`;
  }
}

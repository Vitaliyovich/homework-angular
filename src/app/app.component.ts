import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private red = Math.floor(Math.random() * 256);
  private green = Math.floor(Math.random() * 256);
  private blue = Math.floor(Math.random() * 256);

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  getRandomColorNav(): string {
    return `rgba(${this.red}, ${this.green}, ${this.blue}, 0.4)`;
  }

  getRandomColorText(): string {
    return `rgba(${this.red}, ${this.green}, ${this.blue})`;
  }
}

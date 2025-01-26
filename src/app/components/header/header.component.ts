import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  spanText = input<string>('Sua compra já está em');
  price = input<number>(0.0);

  backgroundColor = input<string>('background-green');
}

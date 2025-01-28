import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  spanText = input<string>('Sua compra já está em');
  price = input<number>(0.0);

  backgroundColor = input<string>('background-green');
}

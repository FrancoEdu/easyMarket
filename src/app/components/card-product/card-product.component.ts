import { Component, input } from '@angular/core';
import { mockProductCard } from '../flatlist/flatlist.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card-product',
  imports: [MatIconModule],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent {
  mockProduct = input<mockProductCard>();
}

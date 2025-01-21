import { Component, input } from '@angular/core';
import { mockProductCard } from '../flatlist/flatlist.component';

@Component({
  selector: 'app-card-product',
  imports: [],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent {
  mockProduct = input<mockProductCard>();
}

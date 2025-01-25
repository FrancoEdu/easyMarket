import { Component, input } from '@angular/core';
import { CardProductComponent } from "../card-product/card-product.component";
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-flatlist',
  imports: [CardProductComponent],
  templateUrl: './flatlist.component.html',
  styleUrl: './flatlist.component.scss'
})
export class FlatlistComponent {
  products = input<Product[]>();
}

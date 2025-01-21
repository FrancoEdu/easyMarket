import { Component } from '@angular/core';
import { CardProductComponent } from "../card-product/card-product.component";

export interface mockProductCard {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-flatlist',
  imports: [CardProductComponent],
  templateUrl: './flatlist.component.html',
  styleUrl: './flatlist.component.scss'
})
export class FlatlistComponent {
  initialListOfProducts: mockProductCard[] = [
    {
      id: 1,
      name: 'Picanha',
      price: 100.00,
    },
    {
      id: 2,
      name: 'Cervejinha',
      price: 200.00,
    },
    {
      id: 3,
      name: 'Abóbora',
      price: 300.00,
    }
  ];
}

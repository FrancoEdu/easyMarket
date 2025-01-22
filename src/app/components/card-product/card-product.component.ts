import { Component, input } from '@angular/core';
import { mockProductCard } from '../flatlist/flatlist.component';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { RoutesPath } from '../../app.routes';

@Component({
  selector: 'app-card-product',
  imports: [MatIconModule],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent {
  mockProduct = input<mockProductCard>();

  constructor(
    private readonly _router: Router,
  ) { }

  handleClickProductDetails(): void {
    this._router.navigate([RoutesPath.DETAILS, this.mockProduct()?.id])
  }
}

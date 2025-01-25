import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { RoutesPath } from '../../app.routes';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-card-product',
  imports: [MatIconModule],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent {
  product = input<Product>();

  constructor(
    private readonly _router: Router,
  ) { }

  handleClickProductDetails(): void {
    this._router.navigate([RoutesPath.DETAILS, this.product()?.Id])
  }
}

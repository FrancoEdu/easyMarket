import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { RoutesPath } from '../../app.routes';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { _productsThatUsePerKilo, _productsThatUseQuantity } from '../../enums/category-of-food.enum';

@Component({
  selector: 'app-card-product',
  imports: [MatIconModule, CommonModule],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent {
  product = input<Product>();
  
  _productsThatUsePerKilo = _productsThatUsePerKilo;
  _productsThatUseQuantity = _productsThatUseQuantity;

  constructor(
    private readonly _router: Router,
  ) { }

  handleClickProductDetails(): void {
    this._router.navigate([RoutesPath.DETAILS, this.product()?.Id])
  }
}

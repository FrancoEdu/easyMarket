import { Component } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { HeaderTitleComponent } from '../../components/header-title/header-title.component';
import { CategoryDropdownComponent } from '../../components/category-dropdown/category-dropdown.component';
import { _productsThatUsePerKilo, _productsThatUseQuantity, CategoryOfProducts } from '../../enums/category-of-food.enum';

@Component({
  selector: 'app-new-product',
  imports: [HeaderTitleComponent, InputComponent, CategoryDropdownComponent],
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent {

  optionSelected?: CategoryOfProducts;

  handleOptionSelected(event: string): void {
    this.optionSelected = event as CategoryOfProducts;
  }

  isProductThatUsePerKilo(): boolean {
    return (this.optionSelected && _productsThatUsePerKilo.includes(this.optionSelected)) ?? false;
  }

  isProductThatUsePerUnit(): boolean {
    return (this.optionSelected && !_productsThatUseQuantity.includes(this.optionSelected)) ?? false;
  }
}

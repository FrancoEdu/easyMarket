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
    this.optionSelected = CategoryOfProducts[event as keyof typeof CategoryOfProducts];
    console.log('Option selected:', this.optionSelected);
  }

  get isProductThatUsePerKilo(): boolean {
    if (this.optionSelected === undefined || this.optionSelected === null) return false;
    return _productsThatUsePerKilo.includes(this.optionSelected);
  }

  get isProductThatUsePerUnit(): boolean {
    if (this.optionSelected === undefined || this.optionSelected === null) return false;
    return _productsThatUseQuantity.includes(this.optionSelected);
  }
}

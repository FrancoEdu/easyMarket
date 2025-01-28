import { Component, output } from '@angular/core';
import { CategoryOfProducts, getCategoryLabel } from '../../enums/category-of-food.enum';

@Component({
  selector: 'app-category-dropdown',
  imports: [],
  templateUrl: './category-dropdown.component.html',
  styleUrl: './category-dropdown.component.scss'
})
export class CategoryDropdownComponent {
  
  optionSelected = output<string>();

  categories = Object.keys(CategoryOfProducts).map((key) => ({
    value: key,
    label: getCategoryLabel(key as keyof typeof CategoryOfProducts),
  }));

  handleSelectOptinChange(event: any): void {
    const selectElement = event.target as HTMLSelectElement;
    this.optionSelected.emit(selectElement.value);
  }
}

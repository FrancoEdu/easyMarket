import { Component } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { HeaderTitleComponent } from '../../components/header-title/header-title.component';
import { CategoryDropdownComponent } from '../../components/category-dropdown/category-dropdown.component';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-product',
  imports: [HeaderTitleComponent, InputComponent, CategoryDropdownComponent],
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
}

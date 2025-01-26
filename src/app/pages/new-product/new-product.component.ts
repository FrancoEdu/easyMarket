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

  handleOptionSelected(event: string): void {
    console.log(event);
  }
}

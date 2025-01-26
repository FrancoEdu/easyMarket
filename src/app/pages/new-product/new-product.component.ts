import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { HeaderComponent } from "../../components/header/header.component";
import { HeaderTitleComponent } from '../../components/header-title/header-title.component';
import { CategoryDropdownComponent } from '../../components/category-dropdown/category-dropdown.component';
import { _productsThatUsePerKilo, _productsThatUseQuantity, CategoryOfProducts } from '../../enums/category-of-food.enum';

@Component({
  selector: 'app-new-product',
  imports: [HeaderTitleComponent, InputComponent, CategoryDropdownComponent, ButtonComponent, HeaderComponent, ReactiveFormsModule],
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent {

  optionSelected?: CategoryOfProducts;
  productForm!: FormGroup; 

  constructor(
    private readonly _formBuilder: FormBuilder,
  ) {
    this.buildResourceForm();
  }

  handleOptionSelected(event: string): void {
    this.optionSelected = CategoryOfProducts[event as keyof typeof CategoryOfProducts];
  }

  handleClickButtonSave(): void {
    console.log('Formulário válido. Dados:', this.productForm.value);
  }

  
  get isProductThatUsePerKilo(): boolean {
    if (this.optionSelected === undefined || this.optionSelected === null) return false;
    return _productsThatUsePerKilo.includes(this.optionSelected);
  }
  
  get isProductThatUsePerUnit(): boolean {
    if (this.optionSelected === undefined || this.optionSelected === null) return false;
    return _productsThatUseQuantity.includes(this.optionSelected);
  }

  private buildResourceForm(): void {
    this.productForm = this._formBuilder.group({
      name: ['', Validators.required], // Nome do produto (obrigatório)
      category: [null, Validators.required], // Categoria do produto (obrigatório)
      pricePerKilo: [null], // Preço por quilo (opcional)
      kilo: [null], // Peso em quilos (opcional)
      unitOrBale: [true], // Unidade ou Fardo (padrão: Unidade)
      unitPrice: [null], // Preço por unidade (opcional)
      quantity: [null], // Quantidade (opcional)
    });
  }
}

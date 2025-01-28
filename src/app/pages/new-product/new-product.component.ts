import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { HeaderComponent } from "../../components/header/header.component";
import { HeaderTitleComponent } from '../../components/header-title/header-title.component';
import { CategoryDropdownComponent } from '../../components/category-dropdown/category-dropdown.component';
import { _productsThatUsePerKilo, _productsThatUseQuantity, CategoryOfProducts } from '../../enums/category-of-food.enum';
import { FinalPriceCalculatorFactory } from '../../extensions/factory/final-price-calculator.factory';

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
    private readonly _cdr: ChangeDetectorRef,
  ) {
    this.buildResourceForm();
  }

  handleOptionSelected(event: string): void {
    this.optionSelected = CategoryOfProducts[event as keyof typeof CategoryOfProducts];
    this.productForm.get('category')?.setValue(this.optionSelected);
    this.setValidators();
    
    // Força o Angular a verificar novamente o estado do componente
    this._cdr.detectChanges();
  }

  handleClickButtonSave(): void {
    console.log('Validade do Formulário', this.productForm.invalid);
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

  private setValidators(): void {
    this.cleanValidators();
    this.cleanValues();

    if (this.isProductThatUsePerKilo) {
      this.productForm.get('kilo')?.setValidators([Validators.required]);
      this.productForm.get('pricePerKilo')?.setValidators([Validators.required]);
    }

    if (this.isProductThatUsePerUnit) {
      this.productForm.get('unitOrBale')?.setValidators([Validators.required]);
      this.productForm.get('unitPrice')?.setValidators([Validators.required]);
      this.productForm.get('quantity')?.setValidators([Validators.required]);
    }

    this.productForm.updateValueAndValidity();
  }

  private cleanValidators(): void {
    this.productForm.get('kilo')?.clearValidators();
    this.productForm.get('pricePerKilo')?.clearValidators();
    this.productForm.get('unitOrBale')?.clearValidators();
    this.productForm.get('unitPrice')?.clearValidators();
    this.productForm.get('quantity')?.clearValidators();
  }

  private cleanValues(): void {
    this.productForm.get('kilo')?.setValue(null);
    this.productForm.get('pricePerKilo')?.setValue(null);
    this.productForm.get('unitOrBale')?.setValue(true);
    this.productForm.get('unitPrice')?.setValue(null);
    this.productForm.get('quantity')?.setValue(null);
  }

  get calculateFinalPrice(): number {
    if (this.optionSelected === undefined || this.optionSelected === null) return 0.0; 
    const calculator = FinalPriceCalculatorFactory.createCalculator(this.optionSelected!);
    return calculator.calculateFinalPrice(
      this.productForm.get('kilo')?.value ?? this.productForm.get('quantity')?.value ?? 0, 
      this.productForm.get('pricePerKilo')?.value ?? this.productForm.get('unitPrice')?.value ?? 0
    );
  }
}

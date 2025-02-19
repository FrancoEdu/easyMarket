import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../components/button/button.component';
import { HeaderComponent } from "../../components/header/header.component";
import { HeaderTitleComponent } from '../../components/header-title/header-title.component';
import { CategoryDropdownComponent } from '../../components/category-dropdown/category-dropdown.component';
import { _productsThatUsePerKilo, _productsThatUseQuantity, CategoryOfProducts } from '../../enums/category-of-food.enum';
import { FinalPriceCalculatorFactory } from '../../extensions/factory/final-price-calculator.factory';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutesPath } from '../../app.routes';

@Component({
  selector: 'app-new-product',
  imports: [HeaderTitleComponent, CategoryDropdownComponent, ButtonComponent, HeaderComponent, ReactiveFormsModule],
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
  providers: [ToastrService, ProductService]
})
export class NewProductComponent {

  optionSelected?: CategoryOfProducts;
  productForm!: FormGroup;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _cdr: ChangeDetectorRef,
    private readonly _toastrService: ToastrService,
    private readonly _productService: ProductService,
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
  ) {
    this.buildResourceForm();
    //this.handleProduct();
  }
  
  get isProductThatUsePerKilo(): boolean {
    if (this.optionSelected === undefined || this.optionSelected === null) return false;
    return _productsThatUsePerKilo.includes(this.optionSelected);
  }
  
  get isProductThatUsePerUnit(): boolean {
    if (this.optionSelected === undefined || this.optionSelected === null) return false;
    return _productsThatUseQuantity.includes(this.optionSelected);
  }
  
  get calculateFinalPrice(): number {
    if (this.optionSelected === undefined || this.optionSelected === null) return 0.0; 
    const calculator = FinalPriceCalculatorFactory.createCalculator(this.optionSelected!);

    const result = calculator.calculateFinalPrice(
      this.productForm.get('kilo')?.value ?? this.productForm.get('quantity')?.value ?? 0, 
      this.productForm.get('pricePerKilo')?.value ?? this.productForm.get('unitPrice')?.value ?? 0
    );

    return result;
  }

  handleOptionSelected(event: string): void {
    this.optionSelected = CategoryOfProducts[event as keyof typeof CategoryOfProducts];
    this.productForm.get('category')?.setValue(this.optionSelected);
    this.setValidators();
    
    // Força o Angular a verificar novamente o estado do componente
    this._cdr.detectChanges();
  }
  
  handleClickButtonSave(): void {
    if (this.productForm.invalid) {
      this._toastrService.warning("Preencha todos os dados obrigatórios");
      return;
    }

    const formValueProduct = this.productForm.value;
    const newProduct = new Product(
      formValueProduct.name, 
      formValueProduct.category, 
      formValueProduct.pricePerKilo, 
      formValueProduct.quantity, 
      formValueProduct.unitOrBale, 
      formValueProduct.unitPrice,
      formValueProduct.kilo
    );

    // Salvar o produto no localStorage
    this._productService.addProduct(newProduct);
    this._toastrService.success("Produto salvo com sucesso!");
    
    // Navega para a home page
    this._router.navigate([RoutesPath.HOME]);
  }

  private buildResourceForm(): void {
    this.productForm = this._formBuilder.group({
      name: ['', Validators.required], // Nome do produto (obrigatório)
      category: [null, Validators.required], // Categoria do produto (obrigatório)
      pricePerKilo: [null, [Validators.pattern(/^\d*\.?\d+$/)]], // Preço por quilo (opcional, mas deve ser número)
      kilo: [null, [Validators.pattern(/^\d*\.?\d+$/)]], // Peso em quilos (opcional, mas deve ser número)
      unitOrBale: [true], // Unidade ou Fardo (padrão: Unidade)
      unitPrice: [null, [Validators.pattern(/^\d*\.?\d+$/)]], // Preço por unidade (opcional, mas deve ser número)
      quantity: [null, [Validators.pattern(/^\d*\.?\d+$/)]], // Quantidade (opcional, mas deve ser número)
    });
  }

  private setValidators(): void {
    this.cleanValidators();
    this.cleanValues();

    if (this.isProductThatUsePerKilo) {
      this.productForm.get('kilo')?.setValidators([Validators.required, Validators.pattern(/^\d*\.?\d+$/)]);
      this.productForm.get('pricePerKilo')?.setValidators([Validators.required, Validators.pattern(/^\d*\.?\d+$/)]);
    }

    if (this.isProductThatUsePerUnit) {
      this.productForm.get('unitOrBale')?.setValidators([Validators.required]);
      this.productForm.get('unitPrice')?.setValidators([Validators.required, Validators.pattern(/^\d*\.?\d+$/)]);
      this.productForm.get('quantity')?.setValidators([Validators.required, Validators.pattern(/^\d*\.?\d+$/)]);
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
}

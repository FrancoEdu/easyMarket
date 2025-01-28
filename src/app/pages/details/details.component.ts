import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderTitleComponent } from "../../components/header-title/header-title.component";
import { ImageComponent } from '../../components/image/image.component';
import { ButtonComponent } from '../../components/button/button.component';
import { _productsThatUsePerKilo, _productsThatUseQuantity, CategoryOfProducts, getCategoryLabel } from '../../enums/category-of-food.enum';
import { Product } from '../../models/product.model';
import { RoutesPath } from '../../app.routes';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  imports: [HeaderTitleComponent, ImageComponent, ButtonComponent, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  id?: string;
  product?: Product;

  _productsThatUsePerKilo = _productsThatUsePerKilo;
  _productsThatUseQuantity = _productsThatUseQuantity;

  constructor(
    private readonly _productService: ProductService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
    private readonly _toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.handleProduct();
  }

  handleDeleteProduct(): void {
    this._productService.removeProduct(this.id!);
    this._toastrService.success('Produto removido com sucesso');
    this._router.navigate([RoutesPath.HOME]);
  }

  private handleProduct(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id')!;

      if (this.id == undefined || this.id == null || this.id == '') {
        this.navigateToNotFoundPage();
      }

      this.product = this._productService.getProductById(this.id) ?? undefined;
      if (this.product == undefined) {
        this.navigateToNotFoundPage();
      }
    });
  }

  private navigateToNotFoundPage(): void {
    this._router.navigate([RoutesPath.NOT_FOUND]);
    return;
  }
}
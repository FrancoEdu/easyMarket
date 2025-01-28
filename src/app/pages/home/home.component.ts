import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ButtonComponent } from "../../components/button/button.component";
import { InputComponent } from "../../components/input/input.component";
import { FlatlistComponent } from "../../components/flatlist/flatlist.component";
import { Router } from '@angular/router';
import { RoutesPath } from '../../app.routes';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

enum navigationPossibilities {
  CART = RoutesPath.CART,
  NEW_PRODUCT = RoutesPath.NEW_PRODUCT
}

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, ButtonComponent, InputComponent, FlatlistComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  navigationOptionsPossibilities = navigationPossibilities;
  products: Product[] = new Array<Product>();

  constructor(
    private readonly _router: Router,
    private readonly _productsService: ProductService,
  ) { }

  ngOnInit(): void {
    this.loadProductList();
  }
  
  handleClickButtonNavigation(navigateTo: navigationPossibilities): void {
    this._router.navigate([navigateTo]);
  }

  handleOnInputTextChange(inputText: string): void {
    this.products = inputText == '' 
      ? this._productsService.getAllProducts()
      : this._productsService.searchByText(inputText);
    
    }
    
    private loadProductList() {
      this.products = this._productsService.getAllProducts();
      console.log(this.products);
  }
}

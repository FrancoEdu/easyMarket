import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ButtonComponent } from "../../components/button/button.component";
import { FlatlistComponent } from "../../components/flatlist/flatlist.component";
import { Router } from '@angular/router';
import { RoutesPath } from '../../app.routes';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import Swal from 'sweetalert2'

enum navigationPossibilities {
  CART = RoutesPath.CART,
  NEW_PRODUCT = RoutesPath.NEW_PRODUCT,
  ENTRY = RoutesPath.ENTRY
}

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, ButtonComponent, FlatlistComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{

  navigationOptionsPossibilities = navigationPossibilities;
  products: Product[] = new Array<Product>();
  totalPrice: number = 0.0;

  constructor(
    private readonly _router: Router,
    private readonly _productsService: ProductService,
  ) { }

  ngOnInit(): void {
    this.loadProductList();
    this.totalPrice = this.getFinalPriceOfProductList();
  }
  
  handleClickButtonNavigation(navigateTo: navigationPossibilities): void {
    this._router.navigate([navigateTo]);
  }

  handleOnInputTextChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const inputValue = target.value;
    this.products = inputValue == '' 
      ? this._productsService.getAllProducts()
      : this._productsService.searchByText(inputValue);
    
  }

  handleSwallComponent(): void {
    Swal.fire({
      title: "Bora para casa?",
      text: "Só um lembrete: o valor final da sua compra pode ter uma pequena variação," 
      + " tanto para mais quanto para menos. Isso acontece porque alguns descontos especiais ou ajustes podem ser aplicados diretamente no caixa. 😉",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#639339",
      cancelButtonColor: "#BF3B44",
      confirmButtonText: "Sim, carrinho cheio",
      cancelButtonText: "Não, voltar"
    }).then((result) => {
      if (result.isConfirmed) {
        this._productsService.clearProducts();
        Swal.fire({
          title: "Compra finalizada!",
          text: "Obrigado por escolher a gente! 🌟 Cada produto é cuidado para tornar seu dia mais especial. Volte sempre, estamos aqui para você! 💛",
          icon: "success"
        }).then(
          () => {
            this.handleClickButtonNavigation(this.navigationOptionsPossibilities.ENTRY);
          }
        );
      }
    });
  }
    
  private getFinalPriceOfProductList(): number {
    return this._productsService.getFinalPriceOfProductList();
  }

  private loadProductList() {
    this.products = this._productsService.getAllProducts();
  }
}

import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ButtonComponent } from "../../components/button/button.component";
import { InputComponent } from "../../components/input/input.component";
import { FlatlistComponent } from "../../components/flatlist/flatlist.component";
import { Router } from '@angular/router';
import { RoutesPath } from '../../app.routes';

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
export class HomeComponent {

  navigationOptionsPossibilities = navigationPossibilities;

  constructor(
    private readonly _router: Router,
  ) { }
  
  handleClickButtonNavigation(navigateTo: navigationPossibilities): void {
    this._router.navigate([navigateTo]);
  }
}

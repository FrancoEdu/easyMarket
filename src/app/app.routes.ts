import { Routes } from '@angular/router';
import { EntryComponent } from './pages/entry/entry.component';
import { HomeComponent } from './pages/home/home.component';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { CartComponent } from './pages/cart/cart.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export enum RoutesPath {
  ENTRY = '',
  HOME = 'home',
  NEW_PRODUCT = 'new-product',
  CART = 'cart',
  NOT_FOUND = '**',
}

export const routes: Routes = [
  { path: RoutesPath.ENTRY, component: EntryComponent },
  { path: RoutesPath.HOME, component: HomeComponent },
  { path: RoutesPath.NEW_PRODUCT, component: NewProductComponent },
  { path: RoutesPath.CART, component: CartComponent },
  { path: RoutesPath.NOT_FOUND, component: NotFoundComponent },
];

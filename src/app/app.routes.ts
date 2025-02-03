import { Routes } from '@angular/router';
import { EntryComponent } from './pages/entry/entry.component';
import { HomeComponent } from './pages/home/home.component';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { CartComponent } from './pages/cart/cart.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DetailsComponent } from './pages/details/details.component';

export enum RoutesPath {
  ENTRY = '',
  HOME = 'home',
  NEW_PRODUCT = 'new-product',
  EDIT_PRODUCT = 'edit-product',
  CART = 'cart',
  DETAILS = 'details',
  NOT_FOUND = '**',
}

export const routes: Routes = [
  { path: RoutesPath.ENTRY, component: EntryComponent },
  { path: RoutesPath.HOME, component: HomeComponent },
  { path: RoutesPath.NEW_PRODUCT, component: NewProductComponent },
  { path: `${RoutesPath.EDIT_PRODUCT}/:id`, component: NewProductComponent },
  { path: RoutesPath.CART, component: CartComponent },
  { path: `${RoutesPath.DETAILS}/:id`, component: DetailsComponent },
  { path: RoutesPath.NOT_FOUND, component: NotFoundComponent },
];

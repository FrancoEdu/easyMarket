import { Routes } from '@angular/router';
import { EntryComponent } from './pages/entry/entry.component';
import { HomeComponent } from './pages/home/home.component';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { CartComponent } from './pages/cart/cart.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: EntryComponent },
  { path: 'home', component: HomeComponent },
  { path: 'new-product', component: NewProductComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', component: NotFoundComponent },
];

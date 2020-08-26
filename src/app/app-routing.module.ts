import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from '../app/product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent} from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { PriceDetailsComponent } from './price-details/price-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '' , component: LoginComponent},
  { path: 'dashboard' , component: DashboardComponent},
  { path: 'productDetails/:id' , component: ProductDetailsComponent},
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: PriceDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

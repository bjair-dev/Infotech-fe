import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {CartComponent} from "./components/cart/cart.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {ProductComponent} from "./components/product/product.component";
import {ThankyouComponent} from "./components/thankyou/thankyou.component";
import {InicioComponent} from './inicio/inicio.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  {path: '', component: InicioComponent},

  {
    path: '', component: AppComponent, children: [
      {path: 'register', component: RegisterComponent},
      {path: 'product/:id', component: ProductComponent},
      {path: 'cart', component: CartComponent},
      {path: 'checkout', component: CheckoutComponent},
      {path: 'thankyou', component: ThankyouComponent},
      {path: 'home', component: HomeComponent},
      {path: 'login', component:LoginComponent},
      {path: 'register', component:RegisterComponent},


      {path: '**', redirectTo: '', pathMatch: 'full'}
    ]
  }, 
 ]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

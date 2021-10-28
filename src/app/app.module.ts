import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { MaterialModule } from './material.module';



import {HeaderComponent} from './components/header/header.component';
import {HeaderTopComponent} from './components/header-top/header-top.component'
import {FooterComponent} from './components/footer/footer.component';
import {FooterComponent2} from './components/footer-2/footer.component';
import {HomeComponent} from './components/home/home.component';
import {SectionCarrouselComponent} from './components/section-carrousel/section-carrousel.component';
import {SectionProOferComponent} from './components/section-pro-ofer/section-pro-ofer.component';
import {SectionMarcasComponent} from './components/section-marcas/section-marcas.component';
import {SectionVentajasComponent} from './components/section-ventajas/section-ventajas.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {CartComponent} from './components/cart/cart.component';
import {CheckoutComponent} from './components/checkout/checkout.component';
import {HttpClientModule} from "@angular/common/http";
import {ProductComponent} from './components/product/product.component';
import {ThankyouComponent} from './components/thankyou/thankyou.component';
import {NgxSpinnerModule} from "ngx-spinner";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastrModule} from 'ngx-toastr';
import { FlexLayoutModule } from '@angular/flex-layout';
import {InicioComponent} from './inicio/inicio.component';
import{CargarScriptsService} from './cargar-scripts.service';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderTopComponent,
    SectionCarrouselComponent,
    SectionProOferComponent,
    SectionMarcasComponent,
    SectionVentajasComponent,
    FooterComponent2,
    FooterComponent,
    InicioComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    CheckoutComponent,
    ProductComponent,
    ThankyouComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    MaterialModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot()

  ],
  providers: [CargarScriptsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

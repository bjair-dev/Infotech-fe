import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderTopComponent } from './header-top/header-top.component';

import{CargarScriptsService} from './cargar-scripts.service';
import { SectionCarrouselComponent } from './section-carrousel/section-carrousel.component';
import { SectionProductosComponent } from './section-productos/section-productos.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SectionProOferComponent } from './section-pro-ofer/section-pro-ofer.component';
import { SectionMarcasComponent } from './section-marcas/section-marcas.component';
import { SectionVentajasComponent } from './section-ventajas/section-ventajas.component';
import { FooterComponent } from './footer/footer.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderTopComponent,
    SectionCarrouselComponent,
    SectionProductosComponent,
    SectionProOferComponent,
    SectionMarcasComponent,
    SectionVentajasComponent,
    FooterComponent,
    SplashScreenComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CarouselModule,
    FlexLayoutModule
  ],
  providers: [CargarScriptsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {CartModelServer} from "../../models/cart.model";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import {CargarScriptsService} from '../../cargar-scripts.service';

@Component({
  selector: 'mg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartData: CartModelServer;
  cartTotal: Number;

  constructor(public cartService: CartService,
    private matIconRegistry: MatIconRegistry,
    public _CargarScriptsService:CargarScriptsService,
    private domSanitizer: DomSanitizer) {
      _CargarScriptsService.Carga(["cart"])
      this.matIconRegistry.addSvgIcon(
      "carte",
      this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/icon/shopping cart.svg"));
     }

  ngOnInit() {
  this.cartService.cartTotal$.subscribe(total => {
    this.cartTotal = total;
  });

  this.cartService.cartDataObs$.subscribe(data => this.cartData = data);
  }

}

import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ProductModelServer, serverResponse} from "../../models/product.model";
import {CartService} from "../../services/cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-section-pro-ofer',
  templateUrl: './section-pro-ofer.component.html',
  styleUrls: ['./section-pro-ofer.component.scss']
})
export class SectionProOferComponent implements OnInit {
  products: ProductModelServer[] = [];

  constructor(private productService: ProductService,
    private cartService: CartService,
    private router:Router) {
}

ngOnInit() {
this.productService.getAllProducts(8).subscribe((prods: serverResponse ) => {
this.products = prods.products;
console.log(this.products);
});
}

AddProduct(id: Number) {
this.cartService.AddProductToCart(id);
}

selectProduct(id: Number) {
this.router.navigate(['/product', id]).then();
}
}

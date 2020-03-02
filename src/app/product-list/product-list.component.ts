import { Component } from '@angular/core';

import { products } from '../products';
/**To implement service, import the recent created service */
import { CartService} from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

   constructor(
    private cartService: CartService,
  ) { }

  add() {
    window.alert('Producto agregado a tu lista de favoritos');
  }

  addToCart(product){
    this.cartService.addToCart(product);
    window.alert("Producto agregado exitosamente");
  }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
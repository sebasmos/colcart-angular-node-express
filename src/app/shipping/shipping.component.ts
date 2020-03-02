import { Component, OnInit } from '@angular/core';
/** To be able to show the assets files as stream files from external APIs, import cartService */
import { CartService} from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  /*Define property for shipping*/
  shippingCosts;
  constructor(
    /*Inject the cart service in the ShippingComponent constructor*/
    private cartService: CartService
  ) { }

  ngOnInit() {
    /*Using pre-defined function, get prices from assets*/
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}
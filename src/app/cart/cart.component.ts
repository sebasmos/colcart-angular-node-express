import { Component, OnInit } from '@angular/core';
/**Import cart services so this page will be able to show the bought products */
import { CartService} from '../cart.service';
/**Angular's FormBuilder service provides convenient methods for generating controls*/
import { FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  /** Define the items property to store the products in the cart. */
  items;
  checkoutForm;

  /** Add cart cartService so we can use it to extract the bought products in one page through the get function*/
  constructor(
    private cartService:  CartService,
    private formBuilder: FormBuilder,
  ) {
     this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
   }

/** Retrieve information from the afore created service */
  ngOnInit() {
    this.items = this.cartService.getItems();
    }

  /*For the checkout process, users need to submit their name and address. When they submit their order, the form should reset and the cart should clear.*/
  onSubmit(customerData){// Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Su compra ha sido enviada', customerData);
  }

}
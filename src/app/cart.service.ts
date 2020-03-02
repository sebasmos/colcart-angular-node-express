/*This function allows services to be injected within each component as desired.*/

import { Injectable } from '@angular/core';
/** Import HttpClientModule for injecting expternal APIs services*/
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn:'root' /** Three shakes */
})
export class CartService {
/*Create array to add items*/
  items = [];
  constructor(
/*Declare injection through HttpClient*/
    private http: HttpClient
  ) { }

  /*Funciones para anadir, actualizar o eliminar productos de la canasta*/

  /*AddToChart appends product within array of items */
  addToCart(product){
    this.items.push(product);
  }

  /**getItems returns current items in cart array (items) */
  getItems(){
    return this.items;
  }

  /**clearCart returns empty array of items */
  clearCart(){
    this.items = [];
    return this.items;
  }
  /** New Method for extracting shipping data from assets: shipping json */
  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }





}